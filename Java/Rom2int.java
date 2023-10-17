import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Rom2int {
    public static void main(String args[]){
        Rom2int obj = new Rom2int();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Roman number input as capital letters: ");
        String input = sc.nextLine();
        System.out.println("The integer value of the given Roman number is: "+obj.romanToInt(input));
    }

    public int romanToInt (String s){
        Map<Character, Integer> map = new HashMap();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;
        for(int i = 0; i < s.length(); i++){
            if(i > 0 && map.get(s.charAt(i)) > map.get(s.charAt(i - 1))){
                result += map.get(s.charAt(i)) - 2 * map.get(s.charAt(i-1));
            }else{
                result += map.get(s.charAt(i));
            }
        }
        return result;
    }
}
