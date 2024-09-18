#include<iostream>
using namespace std;

struct node{
	int data;
	struct node *next;
};

node *head=NULL, *last=NULL;

void insert_end(int num){
	node *temp = new node;   //dynamic memory allocation
	temp->data = num;
	temp->next = NULL;
	if(head==NULL){
		//insert first node
		head = temp;
		last = temp;
		
	}else{
		last->next = temp;
		last = temp;
	}
}
void show(){
 cout<<"\n the list is \n";
	node *ptr = head;
	while(ptr!=NULL){
		cout<<ptr->data<<"->";
		ptr= ptr->next;
	}
}
main(){
	char ch;
	int n;
	do{
		cout<<"\n Enter data->";
		cin>>n;
		insert_end(n);
		show();
		cout<<"\n Do you want to insert more items in list:";
		cin>>ch;
	}while(ch=='y'||ch==
	'Y');
}
