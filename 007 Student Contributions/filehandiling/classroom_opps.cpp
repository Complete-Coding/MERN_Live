#include<iostream>
using namespace std;

class student{
	//data members
	int rollno;
	char name[20];
	
	//member functions
	public:
	void input(){
		cout<<"\nEnter rollno and name :";
		cin>>rollno>>name;
	}
	void show(){
		cout<<"\n"<<rollno<<" : "<<name;
	}
};
int main(){
	student st[5];		//array of student objects
	//input values in array of objects
	for(int i=0;i<5;i++)
		st[i].input();
	
	//display
	for(int i=0;i<5;i++)
		st[i].show();
	
}
