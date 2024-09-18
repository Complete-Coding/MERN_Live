#include<iostream>
using namespace std;

struct employee
{
 int id;
 char name;
 float salary;
};

union money
{
int id;
char name;
float salary;
};

int main(){
//union money m1;
//m1.id = 102;
//m1.name = 'A';
//cout<<"the value is "<<m1.name<<endl;
enum meal{breakfast, lunch, dinner};
meal m1 = lunch;
cout<<(m1==2);
//struct employee harry;
//harry.id = 101;
//harry.name = 'a';
//harry.salary = 120000;
//cout<<"the value is "<<harry.id<<endl;
//cout<<"the value is "<<harry.name<<endl;
//cout<<"the value is "<<harry.salary<<endl;
}
