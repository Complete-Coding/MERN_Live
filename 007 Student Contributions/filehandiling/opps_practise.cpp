#include<iostream>
using namespace std;
int main(){
	
//	int a[5],n,sum=0;
//	cout<<"Enter your size of array:";
//	cin>>n;
//	for(int i=0;i<n;i++){
//		cout<<"Enter value of array:";
//		cin>>a[i];
//	}
//	// finding of max & min
//	int max = a[0];
//	int min = a[0];
//	for(int i=0;i<n;i++){
//		if(a[i]>max){
//			max = a[i];
//		}
//		if(a[i]<min){
//			min = a[i];
//		}
//	}
//	// display array
//	for(int i=0;i<n;i++){
//		cout<<"value of array:"<<a[i]<<endl;
//		sum = sum+a[i];
//	}
//	cout<<"sum of array of value:"<<sum<<endl;
//	cout<<"max of value of array:"<<max<<endl;
//	cout<<"min of value of array:"<<min;
	
 // swapping array
 
//   int a[10],n;
//   cout<<"Enter array size:";
//   cin>>n;
//   for(int i=0;i<n;i++){
//   	cout<<"array value:";
//   	cin>>a[i];
//   }
//   
//   for(int i=0;i<n;i++){
//   	for(int j=0;j<n-1;j++){
//   		if(a[j]>a[j+1]){
//   			int temp = a[j];
//   			    a[j] = a[j+1];
//   			    a[j+1] = temp;
//		   }
//	   }
//   }
//   
//   // display array
//   for(int i=0;i<n;i++){
//   	 cout<<a[i]<<"\t";
//   }

// insertion 

//int a[10],n,val,p;
//cout<<"Enter size of array:";
//cin>>n;
//for(int i=0;i<n;i++){
//	cout<<"Enter value of array:";
//	cin>>a[i];
//}
//cout<<"Enter new value of array:";
//cin>>val;
//cout<<"Enter position of array:";
//cin>>p;
//for(int i=n-1;i>=p-1;i--){
//	a[i+1] = a[i];
//}
// a[p-1] = val;
// n++;
//// display array
//for(int i=0;i<n;i++){
//	cout<<a[i]<<"\t";
//}

// deletion
int a[10],n,val,pos,f=0;
cout<<"Enter size of array:";
cin>>n;
for(int i=0;i<n;i++){
	cout<<"Enter value of array:";
	cin>>a[i];
}
cout<<"Enter new value of array:";
cin>>val;
for(int i=0;i<n;i++){
	if(a[i]==val){
		pos = i;
		f = i;
		break;
	}
}
if(f == 0){
	cout<<"element not found:";
}
else{
	for(int i=pos;i<n;i++){
	   a[i] = a[i+1];	
	}
	n--;
}
// display array
for(int i=0;i<n;i++){
	cout<<a[i]<<"\t";
}


	return 0;
}
