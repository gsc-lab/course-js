
class A {
    x = 2;

   this.test() {
        console.log(this.x);
    }
}

a1 = new A();
const f1 = a1.prtInfo;
const f2 = a1.test;

f1();
f2();