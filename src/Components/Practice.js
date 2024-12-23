// import { Button } from 'react-bootstrap';
function Practice(){
    return(
        <>
        {/* <Button type="button" class="btn btn-primary">Primary</Button> */}
        {/* <div class="container-sm border pt-5 my-5">100% wide until small breakpoint</div> */}
        <div className='container border'>
            <div className='row text-center'>
                <div className="col-md-3 bg-info border w-10 order-4"><h1>First</h1></div>
                <div className="col-md-3 bg-secondary border order-3"><h1>Second</h1></div>
                <div className="col-md-3 bg-primary border order-2"><h1>Third</h1></div>
                <div className="col-md-3 bg-success border order-1"><h1>Fourth</h1></div>
            </div>
        </div>
        <div class="container">
            <div class="row border">
                <div class="col-md-3 bg-info">1</div>
                <div class="col-md-3 bg-primary offset-md-6">2</div>
            </div>
        </div>
        </>
    )
}
export default Practice;