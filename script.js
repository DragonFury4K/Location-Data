if('geolocation' in navigator) 
{
 console.log("Geoloc");
 navigator.geolocation.getCurrentPosition(position => 
    {
     console.log(position);
    });
}
else 
{
    console.log("No geoloc");
}