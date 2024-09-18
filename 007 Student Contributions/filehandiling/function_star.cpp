#include<iostream>
using namespace std;

 struct {
 	int id;
 	char name[10],
// 	int sal;
// 	int age;
 } emp;
 
//void myFun(){
//   cout<< "I just got executed!\n";	
//}

//void myFun();

//void myFunction(string fname){
//	  cout<<"Hey my name is " <<fname<<endl;
//}

//void myFunction(string country = "india"){
//	cout<< country <<"\n";
//}

//void myFunction(string fname, int age){
//	cout<< "my name is "<< fname << " and age " << age<<endl;
//}

//int myFunction(int x , int y){
//	return x + y;
//}

//int myFunction(int &x, int &y){
//	int z = x;
//	    x = y;
//	    y = z;
//}

//int myFunction(int mynum[5]){
//	for(int i=0;i<5;i++){
//		cout<< mynum[i]<<endl;
//	}
//}

//double plusfun(double x, double y){
//	return x+y;
//}

int main(){
//	myFun();
//	myFun();
//	myFun();
//  myFunction("afrozkhan");
//  myFunction("afrozkhan");
//   myFunction("pakistan");
//   myFunction("hindustan");
//   myFunction();
//  myFunction("afrozkhan", 20);
//  myFunction("afroz", 100);
//  int z = myFunction(6,8);
//  cout<< z;
//  int firstname = 10;
//  int secondname = 20;
//  cout << "before swap\n";
//  cout << firstname << secondname<<endl;
//  myFunction(firstname,secondname); 
//  cout << "after swap\n";
//  cout << firstname << secondname<<endl;


//void myFun(){
//	cout<< "Hey i am a afrozkhan a full stack developer!\n";
//}

//int mynum[5] = {10,20,30,40,50};
//myFunction(mynum);
// double num2 = plusfun(34.9,45.6);
//    cout<< "double :"<<num2 << "\n";

//int a[10],n,sum = 0;
//cout<<"Enter your value";
//cin>>n;
//for(int i=0;i<n;i++){
//	cout<<"Enter value\n";
//	cin>>a[i];
//	sum = sum+a[i];
//}
//
//// finding array
//   int max = a[0];
//   int min = a[0];
//   for(int i=0;i<n;i++){
//   	  if(max<a[i]){
//   	  	max = a[i];
//		 }
//		 if(min>a[i]){
//		 	min = a[i];
//		 }
//   }
//
//// dispaly array
//for(int i=0;i<n;i++){
//	cout<< a[i]<<endl;
//}
//cout<<"sum of array"<<sum<<endl;
//cout<<"max of array"<<max<<endl;
//cout<<"min of array"<<min<<endl;

//int a[10],n,sum = 0;
//cout<<"\n Enter your value \n";
//cin>>n;
//for(int i=0;i<n;i++){
//	cout<<"Enter value \n";
//	cin>>a[i];
//}
//
//for(int i=0;i<n;i++){
//	for(int j=0;j<n-1;j++){
//		if(a[j]>a[j+1]){
//			int temp = a[j];
//			     a[j] = a[j+1];
//			     a[j+1] = temp;
//		}
//	}
//}
//
//// display array
//for(int i=0;i<n;i++){
//	cout<< a[i]<<"\t";
//}

// array
//string letters[2][2][2] = {
// {
//	{"A","B"},
//	{"E","F"},
//},
//{
//	{"A","B"},
//	{"E","F"},
//}
//};
//for(int i=0;i<2;i++){
//	for(int j=0;j<2;j++){
//		for(int k=0;k<2;k++){
//			cout<< letters[i][j][k]<<"\t";
//		}
//	}
//}

// Structures

 struct emp ob[5];
  cout<<"Enter your data \n";
  for(int i=0;i<5;i++){
  	cout<<"Enter id:";
  	cin>> ob[i].id;
  }


  return 0;

}
