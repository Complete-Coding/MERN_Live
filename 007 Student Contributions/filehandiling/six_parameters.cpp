#include<iostream>
#include<string.h>
using namespace std;

class student{
	//data members
	int rollno;
	char name[20];
	//member functions
	public:
	student(){									//default constructor
		cout<<"\nEnter rollno and name :";
		cin>>rollno>>name;
	}
	student(int r, char nm[]){					//parametrized constructor
		rollno= r;
		strcpy(name, nm);
	}
	student(student &st){						//copy constructor
		rollno = st.rollno;
		strcpy(name, st.name);
	}
	void show(){
		cout<<"\n"<<rollno<<" : "<<name;
	}
};
int main(){
	student st1;					//default constructor called
	student st2(111,"Ram");		//parameterized constructor called
	student st3 = st2;			//copy constructor called
	student st4(st3);			//copy constructor called
	st1.show();
	st2.show();
	st3.show();
	st4.show();
}
