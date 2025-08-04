export function toBinary(decimal){
    let binary = "";
    while(decimal > 0){
        binary = (decimal % 2).toString() + binary;
        decimal = Math.floor(decimal / 2);
        }
        return binary;
        
}