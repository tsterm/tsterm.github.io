
function showData(event)
{
    target = event.target;
    owner = target.ownerSVGElement;
    e = owner.getElementById('display');

    var s = target.dataset.time;
    s += '<tspan x="0" y="2em">' + target.dataset.value + '</tspan>';
    e.innerHTML = s;

    target.setAttribute("visibility", "visible");
    e.setAttribute("visibility", "visible");
}

function hideData(event)
{
    target = event.target;
    owner = target.ownerSVGElement;
    e = owner.getElementById('display');

    target.setAttribute("visibility", "hidden");
    e.setAttribute("visibility", "hidden");
}
