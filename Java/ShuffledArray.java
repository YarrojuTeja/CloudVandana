import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class ShuffledArray{
    public static void main(String args[]){
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        ArrayList<Integer> List = new ArrayList<>();

        for(int i : arr){
            List.add(i);
        }
        System.out.println("Before Shuffle: "+Arrays.toString(arr));
        Collections.shuffle(List);
        System.out.println("After Suffle: "+ List);
    }
}