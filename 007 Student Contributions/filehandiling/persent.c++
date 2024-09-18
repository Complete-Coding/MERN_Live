#include <iostream>
using namespace std;
int main(){
//     int total;
//     float persent;
//	 int phy,com,maths,chemis,bio;
//	 cout<<"Enter the phyiscs subject";
//	 cin>>phy;
//	 cout<<"Enter the computer subject";
//	 cin>>com;
//	 cout<<"Enter the maths subject";
//	 cin>>maths;
//	 cout<<"Enter the chemistry subject";
//	 cin>>chemis;
//	 cout<<"Enter the biology subject";
//	 cin>>bio;
//	 total = phy+com+maths+chemis+bio;
//	 cout<<"total sum of marks"<<total<<endl;
//	 persent = total/5;
//	 cout<<"total persentage"<<persent<<endl;
//	 if(persent>=90){
//	   cout<<"Grade A";
//	 }
//	 else if(persent>=80){
//	    cout<<"Grade B";
//	 }
//	 else if(persent>=70){
//	   cout<<"Grade C";
//	 }
//	 else if(persent>=60){
//	     cout<<"Grade C";
//	 }
//	 else if(persent>=40){
//	    cout<<"Grade E";
//	 }
//	 else if(persent<40){
//	   cout<<"Grade F";
//	 }
//	 else{
//	    cout<<"fail";
//	 }
//    int salary,totalsalary;
//    int hra;
//    int da;
//    cout<<"Enter the salary";
//    cin>>salary;
//    
//    if(salary <= 10000){
//        hra = salary*0.20;
//        da = salary*0.80;
//	}
//	else if(salary<=20000){
//	   hra = salary*0.25;
//       da = salary*0.90;
//	}
//	else{
//	   hra = salary*0.30;
//       da = salary*0.95;
//	}
//	cout<<"total hra "<<hra<<endl;
//	cout<<"total da "<<da<<endl;
//	totalsalary = salary+hra+da;
//	cout<<"total salary "<<totalsalary<<endl;

   int unit;
   float price;
   float surcharge;
   cout<<"Enter the bill unit ";
   cin>>unit;
   if(unit<=50){
     price = unit*0.50;
   }
   else if(unit<=150){
     price = 50 * 0.50 + (unit-50) * 0.75;
   }
   else if(unit<=250){
      price = unit * 0.50 + 100 * 0.75 + (unit-150) * 1.20;  
   }
   else{
        price = unit * 0.50 + 100 * 0.75 + 100 * 1.20 + (unit-250) * 1.50;
   }
    surcharge = price * 0.20;
    price = price + surcharge;
   cout<<"Unit Price "<<price<<endl;
//int fact = 1;
//for(int i=1;i<=5;i++){
//    fact = fact*i;
//}
//cout<<fact;
	 return 0;
}
