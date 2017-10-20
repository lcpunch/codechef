
importPackage(java.io);
importPackage(java.lang);


var bufferedReader = new BufferedReader( new InputStreamReader(System['in']) );
var input = bufferedReader.readLine();

var numbers = input.split(" ");

var withdrawCash = parseFloat(numbers[0]);
var withdrawCashWithTax = withdrawCash + 0.5;
var balance = parseFloat(numbers[1]);

if(withdrawCash % 5 == 0 && withdrawCashWithTax <= balance ) {
    
    var result = balance - withdrawCashWithTax;
    System.out.println(result.toFixed(2));
    
} else {
    System.out.println(balance.toFixed(2));
}