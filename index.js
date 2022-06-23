function crypt(msg, hash) {

    const n = 0611150611150;

    const s = "& * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$ & * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$& * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$& * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$& * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$ & * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$ & * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$& * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$& * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$& * $ @ # !!!!!!!!!!!!!! (: &&&&&&&& % @@@@@@@@@ ####### :) ----------------- $$$$$$$$$$";

    let phrase = msg.split("");

    for (let i = 0; i < phrase.length; i++) {
 
        phrase[i] = (phrase[i].charCodeAt(0) * n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n+ s + n + n);

        phrase[i] += hash;
    }

    phrase.push(n);

    let output = "";
    
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
    }

    return output;
}


function decrypt(cypher, hash) {

    let s = String(hash)

    const msg = cypher.split(s);

    const a = msg.pop();

    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / a);
    }

    let output = "";


    for (let i = 0; i < msg.length; i++) {
    output += msg[i];
    }


    return output;
}

const phrase = "Você deve desistir da vida q planejou, para poder viver a vida q está esperando você";

let pass = crypt(phrase, "151106151106151106151106151106");

console.log(pass);


let solve = decrypt(pass, "151106151106151106151106151106")

console.log(solve);