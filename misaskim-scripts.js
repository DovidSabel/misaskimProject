//--Script to invert button style when clicked.-->

        const buttons = document.querySelectorAll('.item-button');

        buttons.forEach(button=> {
            button.addEventListener('click', () => {
                button.classList.toggle('selected');
            });
        });
   

    
//--Script to set table amount same as chair amount, but not the other way around-->

        const chairsDropdown = document.getElementById('shivaChairsAmount');
        const tablesDropdown = document.getElementById('shivaTablesAmount');

        tablesDropdown.value = chairsDropdown.value;

        chairsDropdown.addEventListener('change', () => {
            tablesDropdown.value = chairsDropdown.value;
        });
        const addPhoneNumberButton = document.querySelector('.add-phone-number-button');
        const additionalPhoneNumberContainer = document.querySelector('.additional-phone-number-container');
        
        addPhoneNumberButton.addEventListener('click', () => {
          additionalPhoneNumberContainer.style.display = 'block';
          addPhoneNumberButton.style.display = 'none';
        });