import React, { Component, Suspense } from 'react'
import {Route, Redirect, Switch } from 'react-router-dom';

// function RouteWithSubRoutes(route) {
//      return (
//         <Route
//             path={route.path}
//             render={props => (
//                //pass the sub-routes down to keep nesting
//               <Suspense fallback={<div>Loading...</div>}>
//                     <route.component {...props} childRoutes={route.childRoutes !== undefined ? route.childRoutes : []} />
//               </Suspense>
                
//         )} />
//     )
     
    
    /*  if (route.isRequiredAuth){
         return (
             <Route 
                 path= {route.path} 
                 render={props => (
                         localStorage.getItem('user')
                         ? <route.component {...props} />
                         : <Redirect to={{ pathname: '/login', state: { redirect: props.location, error: "You need to login first!" } }} />
                 )} />
         );
     }else{
         return (
             <Route
             path={route.path}
             render={props => (
                <Suspense fallback={<div>Loading...</div>}>
                     <route.component {...props} childRoutes={route.childRoutes !== undefined ? route.childRoutes : []} />
                </Suspense>
             )}
         />
         )
     } */
    
//}

// export class RouterView extends Component {
//     render() {
//         console.log(this.props.url);
//         return (
//             <div>
//                 {
                    
//                     this.props.routes.map(function(route, i){
//                         console.log(route);
                        
//                         return <RouteWithSubRoutes key={i} {...route} />
//                     })
//                 }
            
                
//             </div>
//         )
        
//     }
// }



// function RouterView(props){
//     if(!(props.routes instanceof Array)) {
//        throw new Error("routes必须是个数组！")
//        return null
//     }
//     return (
//        <Switch style={{width: '100%', height: '100%'}}>
//           {props.routes.map((route, i) => (
//              <Route key={i} path={route.path} render={(props) => {
//                 var redirect = null
//                 if(route.redirect && props.match.url === props.location.pathname) {
//                    redirect = <Redirect to={route.redirect} />
//                 }
//                 return (
//                    <div style={{height: '100%'}}>
//                       <route.component {...props} childRoutes={route.childRoutes || []}/>
//                       {redirect}
//                    </div>
//                 )
//              }}/>
//           ))}
//        </Switch>
//     )
//  }

function RouterView(props){
     if(!(props.routes instanceof Array)) {
       throw new Error("routes errors")
       return null;
    } 
    return (
        <div>
          <Switch>
          {
              props.routes.map((route, i) => (
                <Route key={i} path={route.path} render={(props) => {
                    var redirect = null;
                    if((props.match.url === props.location.pathname) && route.isRequiredAuth && localStorage.getItem('user') === null) {
                        redirect = <Redirect to={{ pathname: '/login', state: { redirect: props.location, error: "You need to login first!" } }} />
                    }
                    /* if(route.redirect && props.match.url === props.location.pathname) {
                        redirect = <Redirect to={route.redirect} />
                    } */
                    return (
                        <div style={{height: '100%'}}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <route.component {...props} childRoutes={route.childRoutes || []}/>
                                {redirect}
                            </Suspense>
                            
                        </div>
                    )
                }}/>
             ))
          }
          </Switch>
        </div>
    )
 }
export default RouterView
