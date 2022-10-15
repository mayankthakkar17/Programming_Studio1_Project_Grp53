function moveSideBar()
{
    var width = document.getElementById("SideBar").style.width;
    if (width != "0")
    {
        document.getElementById("SideBar").style.width = "0";
    }
    else
    {
        document.getElementById("SideBar").style.width = "10%";
    }
}
