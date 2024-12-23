// import { Button } from 'react-bootstrap';
function Practice(){
    return(
        <>
        {/* <Button type="button" class="btn btn-primary">Primary</Button> */}
        {/* <div class="container-sm border pt-5 my-5">100% wide until small breakpoint</div> */}
        <div className='container border'>
            <div className='row text-center'>
                <div className="col-md-3 bg-info border w-10"><h1>First</h1></div>
                <div className="col-md-3 bg-secondary border"><h1>Second</h1></div>
                <div className="col-md-3 bg-primary border"><h1>Third</h1></div>
                <div className="col-md-3 bg-success border"><h1>Fourth</h1></div>
            </div>
        </div>
        </>
    )
}
export default Practice;