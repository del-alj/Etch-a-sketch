function changeSize(rep)
{
    var regex = /^[0-9]{1,2}$/;
    size = prompt("Enter new size", "");
    let check = (String(size).match(regex));
    while (!check)
    {
        alert("Enter a number from 1-64 range");
        size = prompt("Enter new size", "");
        check = (String(size).match(regex));
    }
   //delete all content of container
    container.innerHTML = '';
    create(size);
    return (size);
}

function create(size)
{
    let i = 0;
    let rep = size * size;
    let container = document.getElementById("container");
    
    while (i++ < rep)
    {
        // chage css
        changeSizeOfDivs(size);
        let div = ft_creatChild(i);
        //style
        ft_style(div, i, size);
        
        container.appendChild(div);

        const tst = document.getElementById(div.id);
        tst.addEventListener("mouseover", function (e) {
            tst.style.backgroundColor = randomColor();
        });
    }
}

function   changeSizeOfDivs(size)
{
    // chage css size
    var cssSize = document.querySelector(':root');
    cssSize.style.setProperty('--size', size);
}

function ft_creatChild(i)
{
    let div = document.createElement('div', i);
    div.id = "box" + i;
    div.className = "border";
    return div;
}

function ft_style(div, i , size)
{
    // let el = div.id;
  

    
   
    // div.addEventListener('mouseover', mouseOver);
    div.style.width = mySize(size);
    div.style.height = mySize(size);
    div.style.gridColumn = i / size;
    div.style.gridRow = i % size;
    div.style.border.nameclass = "border";    
}


function randomColor()
{
    const color = "#" + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

function mySize(size)
{
    return toString(size / 500) + "px";
}



create(16);
