//generic shape class
class Shape {
    constructor(text, color ,shape ) {
      this.text = text;
      this.color = color;
      this.shape = shape;
    }
  }
//extend to specific shapes
class Triangle extends Shape{
    constructor(text, color ,shape) {
        super(text, color ,shape);
        
      } 
      renderTriangle(){
        console.log(this.color, this.text)
        return `<svg height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text></text></svg>`
      }
}
module.exports={
    Triangle
}
//just do one shape to start
//render method that returns html 