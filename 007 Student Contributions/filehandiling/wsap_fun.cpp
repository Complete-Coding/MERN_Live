#include<iostream>
using namespace std;
void fun(int , int);
int main(){
	int a,b;
	cout<<"Enter your valur:";
	cin>>a>>b;
	cout<<"before swap value"<<endl;
	cout<<"swap x"<<a<<endl;
 	cout<<"swap y"<<b<<endl;
	fun(a,b);
	return 0;
}

 void fun(int x, int y){
 	 int c = x;
 	     x = y;
 	     y = c;
 	     cout<<"swap x"<<x<<endl;
 	     cout<<"swap y"<<y;
 	
 }
