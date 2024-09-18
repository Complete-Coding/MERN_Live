#include<iostream>
using namespace std;

class student{
  int rollno;
  char name[20];
 
  public:
   student(){
  	 cout<<"\n Enter your name and rollno";
  	 cin>>rollno>>name;
  }
  
  void show(){
  	  cout<<"\nRoll no = "<<rollno;
  	  cout<<"\nName = "<<name;
  }
};

 int main(){
	student stu[5];
////     student st;
	// array
	for(int i=0;i<5;i++){
		stu[i].input();
	}
//	 //display array
	for(int i=0;i<5;i++){
		stu[i].show();
	}
//	stu.student();
//	stu.show();
}
//#include <iostream>
//#include <cstring>
//using namespace std;
//
//class student {
//    int rollno;
//    char name[20];
//
//public:
//    student() {
//        cout << "\nEnter your name: ";
//        cin.ignore();
//        cin.getline(name, 20);
//        cout << "Enter your roll number: ";
//        cin >> rollno;
//    }
//
//    void show() const {
//        cout << "\nRoll no = " << rollno;
//        cout << "\nName = " << name;
//    }
//};
//
//int main() {
//    student stu[5];  // array of 5 students
//
//    // display array
//    for(int i = 0; i < 5; i++) {
//        stu[i].show();
//    }
//
//    return 0;
//}

