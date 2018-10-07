class SmartCalculator {
  
  constructor(initialValue) {
    this.stackOp = [];
    this.stackVal = [];
    this.stackVal.push( initialValue );
  }

  add(number) {
    this.stackOp.push( '+' );
    this.stackVal.push( number );
    return this;
  }
  
  subtract(number) {
    this.stackOp.push( '-' );
    this.stackVal.push( number );
    return this;
  }

  multiply(number) {
    this.stackOp.push( '*' );
    this.stackVal.push( number );
    return this;
  }

  devide(number) {
    this.stackOp.push( '/' );
    this.stackVal.push( number );
    return this;
  }

  pow(number) {
    this.stackOp.push( '^' );
    this.stackVal.push( number );
    return this;
  }

  valueOf(){

    const arrOp = ['^', '*', '/', '+', '-'];

    for( let i = 0; i < arrOp.length - 2; i++ ){

        for( let j = this.stackOp.length - 1; j >= 0 ; j-- ){

            if( this.stackOp[j] == arrOp[i] ){

                switch( arrOp[i] ){
                    
                    case '^':{
                        this.stackVal[j] = Math.pow( this.stackVal[j], this.stackVal[j + 1] );
                        break;
                    }

                    case '*':{
                        this.stackVal[j] = this.stackVal[j] * this.stackVal[j + 1];
                        break;
                    }

                    case '/':{
                        this.stackVal[j] = this.stackVal[j] / this.stackVal[j + 1];
                        break;
                    }

                }

                this.stackVal.splice( j + 1, 1 );
                this.stackOp.splice( j, 1 );
            }
        }
    }

    while( this.stackOp.length ){

        switch( this.stackOp[0 ]) {

            case '+': {
                this.stackVal[0] = this.stackVal[0] + this.stackVal[1];
                break;
            }
            case '-': {
                this.stackVal[0] = this.stackVal[0] - this.stackVal[1];
                break;
            }
        }

        this.stackVal.splice( 1, 1 );
        this.stackOp.splice( 0, 1 );
    }

    return this.stackVal[0];
}
}

module.exports = SmartCalculator;
