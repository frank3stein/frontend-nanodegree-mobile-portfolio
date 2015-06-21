Two Step Project 

1st Optimizing the index page:

-@fontface and local copy of the needed fonts. Out of the whole font family only 700 and 400 are used.  
-Inlining CSS   
-Minimizing the images and declaring their sizes.  
-Grunt implemented - Destination folder is BUILD    
	-$npm install to install dependencies   
	-Then run grunt in the destination folder   
	-Grunt starts to watch the folder for any changes, ctrl + c to exit the mode.   


2nd The Pizza Page Performance Changes for 60 FPS   
-changePizzaSizes function is rewritten, only the array width change is left in the for loop. Everything else is taken out, as pizza sizes need to be determined only once and the new size needs to be calculated only once.    
-For Speedy animations translate 3d is implemented in updatePositions function    
-The scroll event is watched and scroll is recorded and another function requestTick is called to run requestanimation frame on updatepositions functions, so that the browser can queue up the animations and draw them in a faster way.    
-Number of scrolling pizzas were reduced 200-->64, but it still supports high resolutions.     
-Performance measuring code removed commented.    

