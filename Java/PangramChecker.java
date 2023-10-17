import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args){
        PangramChecker obj = new PangramChecker();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter input: ");
        String input = sc.nextLine();
        String result = obj.isPangram(input.toLowerCase());
        System.out.println("The given string "+ result);
    }

    public static String isPangram(String s){
        if(s.length() < 26){
            return "is not Pangram.";
        }else{
            for(char ch='a'; ch<='z';ch++){
                if(s.indexOf(ch) < 0){
                    return "is not Pangram.";
                }
            }
        }
        return "is Pangram.";
    }
}
