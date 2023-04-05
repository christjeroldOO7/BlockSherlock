

var btnDelete = document.getElementById('clear');
      var inputFocus = document.getElementById('inputFocus');
      //- btnDelete.on('click', function(e) {
      //-   e.preventDefault();
      //-   inputFocus.classList.add('isFocus')
      //- })
      //- inputFocus.addEventListener('click', function() {
      //-   this.classList.add('isFocus')
      //- })
      btnDelete.addEventListener('click', function(e)
      {
        e.preventDefault();
        inputFocus.value = ''
      })
      document.addEventListener('click', function(e)
      {
        if (document.getElementById('first').contains(e.target))
        {
          inputFocus.classList.add('isFocus')
        }
        else
        {
          // Clicked outside the box
          inputFocus.classList.remove('isFocus')
        }
      });