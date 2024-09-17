document.addEventListener('DOMContentLoaded', () => {
            const homeSection = document.getElementById('home');
            const chatbotSection = document.getElementById('chatbot');
            const homeLink = document.getElementById('home-link');
            const chatbotLink = document.getElementById('chatbot-link');
            const chatForm = document.getElementById('chat-form');
            const userInput = document.getElementById('user-input');
            const chatMessages = document.getElementById('chat-messages');

            homeLink.addEventListener('click', () => {
                homeSection.classList.remove('hidden');
                chatbotSection.classList.add('hidden');
            });

            chatbotLink.addEventListener('click', () => {
                homeSection.classList.add('hidden');
                chatbotSection.classList.remove('hidden');
            });

            chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const message = userInput.value.trim();
                if (message) {
                    addMessage('user', message);
                    getBotResponse(message);
                    userInput.value = '';
                }
            });

            function addMessage(sender, message) {
                const messageElement = document.createElement('div');
                messageElement.classList.add(sender);
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            function getBotResponse(message) {
                // In a real application, you would send the message to a server
                // and get a response. For this example, we'll use a simple switch.
                let response;
                switch (message.toLowerCase()) {
                    case 'hello':
                        response = "Hello! How can I assist you with your medical questions today?";
                        break;
                    case 'what are the symptoms of covid-19?':
                        response = "Common symptoms of COVID-19 include fever, cough, and tiredness. However, please consult a healthcare professional for accurate diagnosis and advice.";
                        break;
                    default:
                        response = "I'm sorry, I don't have specific information on that topic. Please consult a healthcare professional for accurate medical advice.";
                }
                setTimeout(() => addMessage('bot', response), 500);
            }
        });
