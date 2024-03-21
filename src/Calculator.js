import { useState } from "react";

function Button({children, onClick}){
    return (
        <button onClick={onClick} style={{
            fontSize:'40px',
            padding:'10px 20px',
            margin:'10px',
            borderRadius:'8px',
            "&:hover": {
                backgroundColor:'#eeeeee',
                fontSize:'1.1em',
            }
        }}>{children}</button>
    );
}


function Calculator() {

    // useState is a builin function wtchich is give 2 return (one is var and one function to update the variable)
    const [a, s] = useState('0');

    function buttonco() {
        s('0');
    }
    function equal(){
        var huda = a.replace('x','*');
        var e = eval(huda);
        s(e);
    }
    function buttonc(num) {
        if (a == "0") {
            // if (a == 'x' || a == '/' || a == '-' || a == '+') {
            //     s = (0, a - 1)+ num;
            // } else {
            //     s('error');
            // }
            s(num);
        } else {
            s(a+num);
        }
    }

    return (
        <div className="mainbox" style={{
            border:'solid',
            display:'flex',
        }}>
            <div className="box2" style={{
                border:'solid',
                backgroundColor:'#e8f5ff',
            }}>
                <div style={{
                    display:'10',
                    overflow:'hide',
                }}>
                    <input value={a} className="display" style={{
                        // flex:'2',
                        alignContent:'center',
                        fontSize:'30px',
                        padding:'20px',
                        border:'solid 1.5px blue',
                        margin:'10px',
                        width:'300px',
                    }}></input>
                </div>
                <div className="button1stl" style={{
                    padding:'5px',
                }}>
                    <Button onClick={()=>buttonc('7')} > 7</Button>
                    <Button onClick={()=>buttonc('8')}> 8</Button>
                    <Button onClick={()=>buttonc('9')}> 9</Button>
                    <Button onClick={()=>buttonc('/')}> /</Button>
                </div>
                <div className="button2stl" style={{
                    padding:'5px',
                }}>
                    <Button onClick={()=>buttonc('4')}> 4</Button>
                    <Button onClick={()=>buttonc('5')}> 5</Button>
                    <Button onClick={()=>buttonc('6')}> 6</Button>
                    <Button onClick={()=>buttonc('x')}> x</Button>
                </div>
                <div className="button2stl" style={{
                    padding:'5px',
                }}>
                    <Button onClick={()=>buttonc('1')}> 1</Button>
                    <Button onClick={()=>buttonc('2')}> 2</Button>
                    <Button onClick={()=>buttonc('3')}> 3</Button>
                    <Button onClick={()=>buttonc('-')}> -</Button>
                </div>
                <div className="button2stl" style={{
                    padding: '5px',
                }}>
                    <button style={{
                    color: 'red',
                    fontSize:'40px',
                    padding:'10px 20px',
                    margin:'10px',
                    borderRadius:'8px',

                }} onClick={()=>buttonco('0')}> C</button>
                    <Button onClick={()=>buttonc('0')}> 0</Button>
                    <Button onClick={()=>buttonc('+')}> +</Button>
                    <Button onClick={()=>equal('=')}> =</Button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;