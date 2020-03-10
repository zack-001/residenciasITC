import React, { Component } from 'react'

class Perfil extends React.Component {
    
    
    render(){
        return(
            <div className="container">
                <div class="py-5 text-center">
                    <h2>PERFIL</h2>
                    {/*<p class="lead">BIENVENIDO! ---- .</p>*/}
                </div>
                <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted"></span>
      </h4>
      <ul class="list-group mb-3">
        <li class="flex-fill justify-content-between ">
            <button className='btn btn-success'>AGREGAR PROYECO</button>
            
        </li>
        <li class="d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Second product</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$8</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Third item</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-success">
            <h6 class="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span class="text-success">-$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>

      
    </div>

    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Billing address</h4>
     
    </div>
 
    </div>
  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">© 2017-2019 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="https://getbootstrap.com/docs/4.3/examples/checkout/#">Privacy</a></li>
      <li class="list-inline-item"><a href="https://getbootstrap.com/docs/4.3/examples/checkout/#">Terms</a></li>
      <li class="list-inline-item"><a href="https://getbootstrap.com/docs/4.3/examples/checkout/#">Support</a></li>
    </ul>
  </footer>

  </div>
        )
    }
}
 export default Perfil;
