


          document.addEventListener('DOMContentLoaded', function() {
              const nameInput = document.getElementById('name');
              const greetBtn = document.getElementById('greet-btn');
              const messageContainer = document.getElementById('message-container');
              const greetingMessage = document.getElementById('greeting-message');
              const secretMessage = document.getElementById('secret-message');
              const formContainer = document.getElementById('form-container');
              const secretSunflower = document.getElementById('secret-sunflower');
              const sunflowerSound = document.getElementById('sunflower-sound');
              
              const typingLabel = document.getElementById('typing-label');
              const SECRET_NAME = "archita";
              
              nameInput.addEventListener('focus', function() {
                  typingLabel.classList.remove('opacity-0');
                  typingLabel.classList.add('opacity-100');
              });
              
              nameInput.addEventListener('blur', function() {
                  typingLabel.classList.remove('opacity-100');
                  typingLabel.classList.add('opacity-0');
              });
              
              greetBtn.addEventListener('click', function() {
                  const name = nameInput.value.trim();
                  
                  if (name === '') {
                      alert('Please enter your name first!');
                      return;
                  }
                  
                  // Hide form immediately
                  formContainer.classList.add('hidden');
                  
                  // Show message container with smooth transition
                  messageContainer.classList.remove('hidden');
                  setTimeout(() => {
                      messageContainer.classList.remove('secret-hide');
                      messageContainer.classList.add('secret-show');
                  }, 10);
                  
                  if (name.toLowerCase().includes(SECRET_NAME)) {
                      // Secret message
                      greetingMessage.classList.add('hidden');
                      secretMessage.classList.remove('hidden');
                      secretSunflower.classList.add('secret-spin');
                      document.getElementById('right-sunflower').classList.remove('hidden');
                      
                      // Play sound
                      sunflowerSound.play();
                      
                      // Confetti with slight delay to match animation
                      setTimeout(() => {
                          confetti({
                              particleCount: 150,
                              spread: 70,
                              origin: { y: 0.5 },
                              colors: ['#F59E0B', '#FCD34D', '#FFFFFF'],
                              shapes: ['circle'],
                              scalar: 0.8,
                              ticks: 100,
                              gravity: 0.5,
                              drift: 0.5,
                              decay: 0.94
                          });
                      }, 300);
                  } else {
                      // Regular greeting
                      greetingMessage.innerHTML = `Hey <span class="font-bold text-amber-800">${name}</span>, nice to meet you!<br>Let's connect  🌻`;
                      greetingMessage.classList.remove('hidden');
                      secretMessage.classList.add('hidden');
                      secretSunflower.classList.remove('secret-spin');
                      document.getElementById('right-sunflower').classList.add('hidden');
                      
                      // Redirect to Instagram after 4 seconds
                      setTimeout(() => {
                          window.location.href = 'https://www.instagram.com/pranshu23x/';
                      }, 4000);
                  }
              });
              
              function resetForm() {
                  // Hide message with transition
                  messageContainer.classList.remove('secret-show');
                  messageContainer.classList.add('secret-hide');
                  
                  // After transition completes, reset everything
                  setTimeout(() => {
                      messageContainer.classList.add('hidden');
                      formContainer.classList.remove('hidden');
                      nameInput.value = '';
                      secretSunflower.classList.remove('secret-spin');
                  }, 300);
              }
              
              // Add hover effect to all sunflowers
              const sunflowers = document.querySelectorAll('.sunflower');
              sunflowers.forEach(sunflower => {
                  sunflower.addEventListener('mouseenter', function() {
                      this.style.animation = 'pulse 1s ease infinite';
                  });
                  
                  sunflower.addEventListener('mouseleave', function() {
                      this.style.animation = 'float 6s ease-in-out infinite';
                  });
              });
              
              // Preload the secret sunflower animation
              secretSunflower.style.opacity = '0';
          });
      