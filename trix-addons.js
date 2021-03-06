/* Trix AddOn File */
(function() {

    document.addEventListener('trix-initialize', function(e) {
      trix = e.target;
      toolBar = trix.toolbarElement;
      Trix.config.textAttributes.sup = { inheritable: true, tagName: 'sup'}
      Trix.config.textAttributes.sub = { inheritable: true, tagName: 'sub'}
  
      //Superscript
      superscriptButtonElem = document.createElement('button')
      superscriptButtonElem.setAttribute('type', 'button')
      superscriptButtonElem.setAttribute('title', 'Superscript')
      superscriptButtonElem.setAttribute('tabindex', '-1')
      superscriptButtonElem.setAttribute('class', 'icon superscript')
      superscriptButtonElem.innerText = 'Superscript'
  
      superscriptButton = toolBar.querySelector('.button_group.block_tools').appendChild(superscriptButtonElem)
  
      superscriptButton.addEventListener('click', function (event) {
        var range = trix.editor.getSelectedRange()
        var selectedText = trix.editor.getDocument().getStringAtRange(range)
        trix.editor.setSelectedRange(range)
        trix.editor.insertHTML('<sup>' + selectedText + '</sup>')
      })
  
  
      // Subscript
      subscriptButtonElem = document.createElement('button')
      subscriptButtonElem.setAttribute('type', 'button')
      subscriptButtonElem.setAttribute('title', 'Subscript')
      subscriptButtonElem.setAttribute('tabindex', '-1')
      subscriptButtonElem.setAttribute('class', 'icon subscript')
      subscriptButtonElem.innerText = 'Subscript'
  
      subscriptButton = toolBar.querySelector('.button_group.block_tools').appendChild(subscriptButtonElem)
  
      subscriptButton.addEventListener('click', function (event) {
        var range = trix.editor.getSelectedRange()
        var selectedText = trix.editor.getDocument().getStringAtRange(range)
        trix.editor.setSelectedRange(range)
        trix.editor.insertHTML('<sub>' + selectedText + '</sub>')
      })
  
      document.querySelector("trix-editor").editor.insertHTML("Hello<sup>2</sup><sub>22</sub>")
    });
  
  }).call(this);