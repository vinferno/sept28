var new_item;
var active_li = null;

document.addEventListener('DOMContentLoaded',function(){
    body = document.getElementsByTagName('body')[0];
    create('ul',body);
    ul = new_item;
    button_create = document.getElementsByTagName('button')[0];
    button_read = document.getElementsByTagName('button')[1];
    button_update = document.getElementsByTagName('button')[2];
    button_delete = document.getElementsByTagName('button')[3];
    input_create = document.getElementsByTagName('input')[0];
    input_read = document.getElementsByTagName('input')[1];
    input_update = document.getElementsByTagName('input')[2];
    input_delete = document.getElementsByTagName('input')[3];

    button_create.addEventListener('click',function(){
        if (input_create.value != '') {
            create('li', ul);
            new_item.innerHTML = '<div> - </div> <div> </div><div>Rename</div>';
            new_item.children[1].innerHTML = input_create.value;
            input_create.value = '';
            loop_active();
        }
    });

    button_read.addEventListener('click',function(){
       input_read.value = active_li.children[1].innerHTML;
    });

    button_update.addEventListener('click',function(){
        active_li.children[1].innerHTML = input_update.value;
    });

    button_delete.addEventListener('click',function(){
        input_delete.value = 'you just deleted: ' + active_li.children[1].innerHTML;
        active_li.remove();
        active_li = ul.children[ul.children.length-1];
    });

    input_create.addEventListener('keyup',function(){
        if(event.keyCode == 13){
            if (input_create.value != '') {
                create('li', ul);
                new_item.innerHTML = '<div> - </div> <div> </div><div>Rename</div>';
                new_item.children[1].innerHTML = input_create.value;
                input_create.value = '';
                loop_active();
                new_item.children[0].addEventListener('click',function(){
                   input_delete.focus();
                });
                new_item.children[2].addEventListener('click',function(){
                    input_update.focus();
                });
            }
        }
    });
    input_read.addEventListener('keyup',function(){
        if(event.keyCode == 13){
            input_read.value = active_li.children[1].innerHTML;
        }
    });
    input_update.addEventListener('keyup',function(){
        if(event.keyCode == 13){
            active_li.children[1].innerHTML = input_update.value;
        }
    });
    input_delete.addEventListener('keyup',function(){
        if(event.keyCode == 13){
            input_delete.value = 'you just deleted: ' + active_li.children[1].innerHTML;
            active_li.remove();
            active_li = ul.children[ul.children.length-1];
        }
    });
});

function create(new_element,where_to_append){
    new_item = document.createElement(new_element);
    where_to_append.appendChild(new_item);
    if (new_element === 'li'){
        active_li = new_item;


        new_item.addEventListener('click',function(){
            active_li = this;
            loop_active();
        });
        new_item.addEventListener('mouseover',function(){
            this.children[0].style.display = 'flex';
            this.children[2].style.display = 'flex';
        });
        new_item.addEventListener('mouseout',function(){
            this.children[0].style.display = 'none';
            this.children[2].style.display = 'none';
        });

    }
};

function loop_active(){
    for (var i = 0;i<ul.children.length;i++){
        ul.children[i].children[1].style.backgroundColor = 'white';
        active_li.children[1].style.backgroundColor = 'lime';
    }
}

