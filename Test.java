class Test {
    static int value;

    static {
        value = 100;
        System.out.println("Static block executed. Value initialized to " + value);
    }
}

class Main {
    public static void main(String[] args) {
        Integer a = 127; // Cached
        Integer b = 127; // Cached
        
        System.out.println(a == b); // true (same object)

        Integer c = 128; // Not cached
        Integer d = 128; // Not cached
        
        System.out.println(c == d); // false (different objects)
    }
}

