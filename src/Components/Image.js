function Image(){
    return(
        <>
        <div class="container mt-3">
        <h2>Rounded Corners</h2>
        <p>The .rounded class adds rounded corners to an image:</p>            
        <img src="https://images.pexels.com/photos/29797566/pexels-photo-29797566/free-photo-of-scenic-view-of-walls-of-jerusalem-national-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="rounded w-30 h-50 float-start" alt="img"/>
        <img src="https://images.pexels.com/photos/29797566/pexels-photo-29797566/free-photo-of-scenic-view-of-walls-of-jerusalem-national-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="rounded-circle w-30 h-50 float-end" alt="img"/> 
        </div> 
        <div class="container mt-3">
            <h2>Thumbnail</h2>
            <p>The .img-thumbnail class creates a thumbnail of the image:</p>            
            <img src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="img-thumbnail w-30 h-50 " alt="img"/> 
        </div>
        
        <div class="container">
        <h2>Responsiv cards</h2>
            <div class="row">
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <img  src="https://images.pexels.com/photos/301718/pexels-photo-301718.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" class="img-thumbnail"/>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <img  src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2"  class="img-thumbnail"/>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <img  src="https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2"  class="img-thumbnail"/>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <img  src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2"  class="img-thumbnail"/>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <img  src="https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2"  class="img-thumbnail"/>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <img  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2"  class="img-thumbnail"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Image;