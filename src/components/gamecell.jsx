import React, {Component} from 'react';

class gamecell extends Component {
    buttonLook(value){
        let buttonClasses = "btn ";
        if(value===0){buttonClasses += " btn-dark";}
        else{buttonClasses += " btn-secondary";}
        buttonClasses+= " w-100 h-100 rounded-0"
        return buttonClasses;
    }

    render() {
        const {tile,value}=this.props;
        return (  
            <button onClick={()=>this.props.onCellPress(tile)} className={this.buttonLook(value)} style={{outline:'none'},{boxShadow:'none'}}>{value}</button>
        );
    }
}
 
export default gamecell;