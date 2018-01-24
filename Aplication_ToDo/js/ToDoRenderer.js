var toDoRenderer = (function(renderer) 
{
    var _listRoot = null;

    // public
    renderer.renderList = function(ToDos)
    {
        _initializeRoot();

        for (var i = 0; i < ToDos.length; i++)
        {
            _createToDoItem(toDos[i]);
        }
    };

    //private
    function _initializeRoot() 
    {
        if (!_listRoot) 
        {
            _listRoot = document.querySelector("toDo-list-root");
        }
        else
        {
            _clearItems();
        }
    }

    function _clearItems()
    {
        while (_listRoot.firstChild)
        {
            _listRoot.removeChild(_listRoot.firstChild);
        }
    }

    function _createToDoItem(toDo) 
    {
        _listRoot.innerHTML += _createToDoFromTemplate(toDo);
    }

    function _createToDoFromTemplate(toDo)
    {
        return "<p>" + toDo.description + "</p>";
    }

    return renderer;
}) (toDoRenderer || {});