/*
 * Brett Fischler
 * Summer 2013
 * Tetris
 */

NUMROWS = 35 // Will change to 25
NUMCOLS = 10
DELAY = 400 // milliseconds
 
function start_game()
{
				$("#startPage").hide();
                c = document.getElementById("gameboard");
                ctx = c.getContext("2d");
                ctx.fillStyle="black";
                ctx.fillRect(0,0,1000,1000);
                initialize_game();
                opening_animation();
        		//start_page();
}
 
/*
* OPENING
* ANIMATION
*
*/
 
function opening_animation()
{
                curr_piece = 0;
                allow_move = false;
                new_piece = true;
                opening = setInterval(opening_game_loop, 50);
}
 
function opening_game_loop()
{
                if (new_piece) {
                                curr_piece++;
                                opening_get_next(curr_piece);
                                new_piece=false;
                                if (curr_piece == 6 || curr_piece == 17 || curr_piece == 21){
                                                clear_board();
                                                return;
                                }
                }
                if(hit_bottom(num_plus)){
                                new_piece=true;
                }
                else{
                                move_down();
                }
                print_board();
}
 
function clear_board()
{
                clearInterval(opening);
                row = 5;
                clear = setInterval(clear_row, 35);
}
 
function clear_row()
{
                if (row==35){
                                clearInterval(clear);
                                if(curr_piece!=21){
                                                opening = setInterval(opening_game_loop, 50);
                                                return;
                                }
                                else{
                                                start_page();
                                                return;
                                }
                }
                for(i = 0;i<NUMCOLS;i++) {
                                board[row][i]=0;
                }
                row++;
                print_board();
}
 
function opening_get_next(c)
{
                if(c==1){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-2,y:1};
                                curr_plus[2]={x:-1,y:-1};
                                curr_plus[3]={x:-1,y:1};
                                curr_plus[4]={x:0,y:-1};
                                curr_plus[5]={x:0,y:1};
                                curr_plus[6]={x:1,y:0};
                                curr_plus[7]={x:2,y:0};
                                curr_x = 11;
                                curr_y = 6;
                                num_plus = 8;
                }             
                else if(c==2){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-2,y:0};
                                curr_plus[2]={x:-2,y:1};
                                curr_plus[3]={x:-1,y:-1};
                                curr_plus[4]={x:-1,y:1};
                                curr_plus[5]={x:0,y:-1};
                                curr_plus[6]={x:0,y:1};
                                curr_plus[7]={x:1,y:-1};
                                curr_plus[8]={x:2,y:-1};
                                curr_x = 11;
                                curr_y = 5;
                                num_plus = 9;
                }
                else if(c==3){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-2,y:0};
                                curr_plus[2]={x:-2,y:1};
                                curr_plus[3]={x:-1,y:-1};
                                curr_plus[4]={x:-1,y:1};
                                curr_plus[5]={x:0,y:-1};
                                curr_plus[6]={x:0,y:1};
                                curr_plus[7]={x:1,y:-1};
                                curr_plus[8]={x:2,y:-1};
                                curr_x = 11;
                                curr_y = 4;
                                num_plus = 9;
                }
                else if(c==4){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-2,y:0};
                                curr_plus[2]={x:-2,y:1};
                                curr_plus[3]={x:-1,y:-1};
                                curr_plus[4]={x:-1,y:1};
                                curr_plus[5]={x:0,y:-1};
                                curr_plus[6]={x:0,y:1};
                                curr_plus[7]={x:1,y:-1};
                                curr_plus[8]={x:1,y:1};
                                curr_plus[9]={x:2,y:-1};
                                curr_plus[10]={x:2,y:1};
                                curr_x = 11;
                                curr_y = 6;
                                num_plus = 11;
                }
                else if(c==5){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-2,y:1};
                                curr_plus[2]={x:-1,y:-1};
                                curr_plus[3]={x:-1,y:1};
                                curr_plus[4]={x:0,y:-1};
                                curr_plus[5]={x:0,y:1};
                                curr_plus[6]={x:1,y:-1};
                                curr_plus[7]={x:1,y:1};
                                curr_plus[8]={x:2,y:-1};
                                curr_plus[9]={x:2,y:1};
                                curr_x = 11;
                                curr_y = 2;
                                num_plus = 10;
                }
                else if(c==6){
                                curr_plus[0]={x:-2,y:-2};
                                curr_plus[1]={x:-2,y:0};
                                curr_plus[2]={x:-1,y:-2};
                                curr_plus[3]={x:-1,y:0};
                                curr_plus[4]={x:0,y:-2};
                                curr_plus[5]={x:0,y:-1};
                                curr_plus[6]={x:0,y:1};
                                curr_plus[7]={x:0,y:2};
                                curr_x = 11;
                                curr_y = 2;
                                num_plus = 8;
                }
                else if(c==7){
                                curr_plus[0]={x:-1,y:-2};
                                curr_plus[1]={x:-1,y:-1};
                                curr_plus[2]={x:-1,y:0};
                                curr_plus[3]={x:-1,y:1};
                                curr_plus[4]={x:0,y:-2};
                                curr_plus[5]={x:1,y:-2};
                                curr_plus[6]={x:1,y:-1};
                                curr_plus[7]={x:1,y:0};
                                curr_plus[8]={x:1,y:1};
                                curr_x = 11;
                                curr_y = 3;
                                num_plus = 9;
                }
                else if(c==8){
                                curr_plus[0]={x:-1,y:-2};
                                curr_plus[1]={x:0,y:-2};
                                curr_plus[2]={x:0,y:-1};
                                curr_plus[3]={x:0,y:1};
                                curr_plus[4]={x:1,y:-2};
                                curr_x = 11;
                                curr_y = 2;
                                num_plus = 5;
                }
                else if(c==9){
                                curr_plus[0]={x:-1,y:-1};
                                curr_plus[1]={x:-1,y:0};
                                curr_plus[2]={x:-1,y:1};
                                curr_plus[3]={x:-1,y:2};
                                curr_plus[4]={x:1,y:-1};
                                curr_plus[5]={x:1,y:0};
                                curr_plus[6]={x:1,y:1};
                                curr_plus[7]={x:1,y:2};
                                curr_x = 11;
                                curr_y = 2;
                                num_plus = 8;
                }
                else if(c==10){
                                curr_plus[0]={x:-2,y:-2};
                                curr_plus[1]={x:-2,y:0};
                                curr_plus[2]={x:-1,y:-2};
                                curr_plus[3]={x:-1,y:0};
                                curr_plus[4]={x:0,y:-2};
                                curr_plus[5]={x:0,y:-1};
                                curr_plus[6]={x:0,y:1};
                                curr_plus[7]={x:0,y:2};
                                curr_plus[8]={x:-2,y:2};
                                curr_plus[9]={x:-1,y:2};
                                curr_x = 11;
                                curr_y = 2;
                                num_plus = 10;
                }
                else if(c==11){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-1,y:-1};
                                curr_plus[2]={x:0,y:-1};
                                curr_plus[3]={x:0,y:1};
                                curr_plus[4]={x:0,y:2};
                                curr_x = 11;
                                curr_y = 2;
                                num_plus = 5;
                }
                else if(c==12){
                                curr_plus[0]={x:0,y:-1};
                                curr_x = 11;
                                curr_y = 1;
                                num_plus = 1;
                }
                else if(c==13){
                                curr_plus[0]={x:-1,y:-2};
                                curr_plus[1]={x:-1,y:0};
                                curr_plus[2]={x:-1,y:1};
                                curr_plus[3]={x:-1,y:2};
                                curr_plus[4]={x:0,y:-2};
                                curr_plus[5]={x:0,y:2};
                                curr_plus[6]={x:1,y:-2};
                                curr_plus[7]={x:1,y:-1};
                                curr_plus[8]={x:1,y:0};
                                curr_plus[9]={x:1,y:2};
                                curr_x = 11;
                                curr_y = 2;
                                num_plus = 10;
                }
                else if(c==14){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-2,y:1};
                                curr_plus[2]={x:-1,y:-1};
                                curr_plus[3]={x:-1,y:1};
                                curr_plus[4]={x:0,y:-1};
                                curr_plus[5]={x:0,y:1};
                                curr_plus[6]={x:1,y:0};
                                curr_plus[7]={x:2,y:0};
                                curr_x = 11;
                                curr_y = 7;
                                num_plus = 8;
                }             
                else if(c==15){
                                curr_plus[0]={x:-2,y:-1};
                                curr_plus[1]={x:-2,y:0};
                                curr_plus[2]={x:-2,y:1};
                                curr_plus[3]={x:-1,y:-1};
                                curr_plus[4]={x:-1,y:1};
                                curr_plus[5]={x:0,y:-1};
                                curr_plus[6]={x:0,y:1};
                                curr_plus[7]={x:1,y:-1};
                                curr_plus[8]={x:1,y:1};
                                curr_x = 11;
                                curr_y = 8;
                                num_plus = 9;
                }
                else if(c==16){
                                curr_plus[0]={x:-2,y:0};
                                curr_plus[1]={x:-2,y:1};
                                curr_plus[2]={x:-1,y:0};
                                curr_plus[3]={x:-1,y:2};
                                curr_plus[4]={x:0,y:2};
                                curr_plus[5]={x:1,y:0};
                                curr_plus[6]={x:1,y:2};
                                curr_plus[7]={x:2,y:0};
                                curr_plus[8]={x:2,y:1};
                                curr_x = 11;
                                curr_y = 6;
                                num_plus = 9;
                }
                else if(c==17){
                                curr_plus[0]={x:-2,y:0};
                                curr_plus[1]={x:-2,y:1};
                                curr_plus[2]={x:-1,y:0};
                                curr_plus[3]={x:-1,y:2};
                                curr_plus[4]={x:0,y:2};
                                curr_plus[5]={x:1,y:0};
                                curr_plus[6]={x:1,y:2};
                                curr_plus[7]={x:2,y:0};
                                curr_plus[8]={x:2,y:1};
                                curr_x = 11;
                                curr_y = 0;
                                num_plus = 9;
                }
                else if(c==18){
                                curr_plus[0]={x:-2,y:0};
                                curr_plus[1]={x:-2,y:1};
                                curr_plus[2]={x:-2,y:2};
                                curr_plus[3]={x:-1,y:0};
                                curr_plus[4]={x:-1,y:2};
                                curr_plus[5]={x:0,y:1};
                                curr_plus[6]={x:0,y:2};
                                curr_plus[7]={x:1,y:0};
                                curr_plus[8]={x:1,y:2};
                                curr_plus[9]={x:2,y:0};
                                curr_plus[10]={x:2,y:2};
                                curr_x = 11;
                                curr_y = 1;
                                num_plus = 11;
                }
                else if(c==19){
                                curr_plus[0]={x:-2,y:0};
                                curr_plus[1]={x:-2,y:1};
                                curr_plus[2]={x:-1,y:0};
                                curr_plus[3]={x:-1,y:2};
                                curr_plus[4]={x:0,y:2};
                                curr_plus[5]={x:1,y:0};
                                curr_plus[6]={x:1,y:2};
                                curr_plus[7]={x:2,y:0};
                                curr_plus[8]={x:2,y:1};
                                curr_x = 11;
                                curr_y = 0;
                                num_plus = 9;
                }
                else if(c==20){
                                curr_plus[8]={x:-5,y:-1};
                                curr_plus[9]={x:-5,y:0};
                                curr_plus[10]={x:-5,y:1};
                                curr_plus[11]={x:-4,y:-1};
                                curr_plus[12]={x:-4,y:1};
                                curr_plus[13]={x:-3,y:-3};
                                curr_plus[14]={x:-3,y:-1};
                                curr_plus[15]={x:-3,y:-0};
                                curr_plus[16]={x:-3,y:1};
                                curr_plus[17]={x:-2,y:-4};
                                curr_plus[18]={x:-2,y:-3};
                                curr_plus[19]={x:-2,y:-2};
                                curr_plus[20]={x:-2,y:0};
                                curr_plus[21]={x:-1,y:-3};
                                curr_plus[22]={x:-1,y:0};
                                curr_plus[23]={x:0,y:-3};
                                curr_plus[24]={x:0,y:-2};
                                curr_plus[25]={x:0,y:-1};
                                curr_plus[26]={x:0,y:1};
                                curr_plus[27]={x:0,y:2};
                                curr_plus[28]={x:1,y:0};
                                curr_plus[29]={x:1,y:2};
                                curr_plus[30]={x:2,y:0};
                                curr_plus[31]={x:2,y:2};
                                curr_plus[32]={x:2,y:3};
                                curr_plus[33]={x:3,y:0};
                                curr_plus[34]={x:4,y:-1};
                                curr_plus[35]={x:4,y:0};
                                curr_plus[36]={x:4,y:1};
                                curr_plus[37]={x:5,y:-1};
                                curr_plus[38]={x:5,y:1};
                                curr_plus[7]={x:6,y:-1};
                                curr_plus[0]={x:6,y:1};
                                curr_plus[1]={x:7,y:-1};
                                curr_plus[2]={x:7,y:1};
                                curr_plus[3]={x:8,y:-2};
                                curr_plus[4]={x:8,y:-1};
                                curr_plus[5]={x:8,y:1};
                                curr_plus[6]={x:8,y:2};
                                curr_x = 11;
                                curr_y = 6;
                                num_plus = 39;
                }
}
 
/*
* DONE WITH
* OPENING
* ANIMATION
*/
 
function start_page()
{
		document.getElementById("gameboard").height = 400;
                ctx.clearRect(0,0,200,400);
                $("#gameboard").hide();
                $("#startPage").show();
                $("#startPage").css("visibility","visible");
                $("#startPage").click(function(){
                   $(this).hide();
                   $("#gameboard").show();
          	       initialize_game();
           	       document.getElementById("gameboard").height = 500;
                   ctx.fillStyle = "1px"
				   ctx.strokeRect(0,400,200,0);
				   print_bottom();
                   set_loop(DELAY);
                });
}
 
function initialize_board()
{
                board = new Array();
                for (i = 0; i<NUMROWS; i++) {
                                board[i] = new Array();
                                for(j = 0; j<NUMCOLS; j++) {
                                                board[i][j] = 0;
                                }
                }
}
 
function initialize_game()
{
                initialize_board();
                initialize_piece();
                linecount=0;
                helper_x=new Array();
                helper_y=new Array();
                allow_move=false;
                window.addEventListener('keydown', arrowpress);
}
 
function arrowpress(e)
{
                if(allow_move){
                                if (e.keyCode == 37){
                                                move_left();
                                }
                                else if (e.keyCode==39){
                                                move_right();
                                }
                                else if (e.keyCode == 40){
                                                clearInterval(interval);
                                                game_loop();
                                                interval = setInterval(game_loop, DELAY);
                                }
                                else if (e.keyCode == 38){
                                                toggle();
                                }
                                else if (e.keyCode == 32){
                                	alert("PAUSE");
                                }
                }
}
 
function initialize_piece()
{
                new_piece = false;
                curr_piece = Math.ceil(Math.random()*7);
                next_piece = Math.ceil(Math.random()*7);
                curr_plus = new Array();
                set_plus(curr_piece);
                curr_x = 13;
                curr_y = NUMCOLS/2-1;
}
 
 
function set_loop(delay)
{
                interval = setInterval(game_loop, delay);
}
 
function game_loop()
{
                allow_move=false;
                if(hit_bottom()){
                				if(game_over()) {
                					clearInterval(interval);
                					alert("Game Over!");
                					start_page();
                				}
                                new_piece=true;
                }
                if (new_piece) {
                                get_next();
                                check_lines();
                                print_bottom();
                                new_piece=false;
                }
                else{
                                move_down();
                }
                print_board();
                allow_move=true;
}
 
function get_next()
{
                curr_piece = next_piece;
                next_piece = Math.ceil(Math.random()*7);
                curr_x = 13;
                curr_y = NUMCOLS/2-1;
                set_plus(curr_piece);
}
 
function set_plus(c)
{
                if(c==1){
                                curr_plus[0]={x:-1,y:0};
                                curr_plus[1]={x:0,y:-1};
                                curr_plus[2]={x:0,y:1};
                                num_plus = 3;
                }             
                else if(c==2){
                                curr_plus[0]={x:0,y:-1};
                                curr_plus[1]={x:0,y:1};
                                curr_plus[2]={x:0,y:2};
                                num_plus = 3;
                }
                else if(c==3){
                                curr_plus[0]={x:-1,y:-1};
                                curr_plus[1]={x:0,y:-1};
                                curr_plus[2]={x:0,y:1};
                                num_plus = 3;
                }
                else if(c==4){
                                curr_plus[0]={x:0,y:-1};
                                curr_plus[1]={x:0,y:1};
                                curr_plus[2]={x:-1,y:1};
                                num_plus = 3;
                }
                else if(c==5){
                                curr_plus[0]={x:-1,y:0};
                                curr_plus[1]={x:-1,y:1};
                                curr_plus[2]={x:0,y:-1};
                                num_plus = 3;
                }
                else if(c==6){
                                curr_plus[0]={x:-1,y:-1};
                                curr_plus[1]={x:-1,y:0};
                                curr_plus[2]={x:0,y:1};
                                num_plus = 3;
                }
                else if(c==7){
                                curr_plus[0]={x:-1,y:0};
                                curr_plus[1]={x:-1,y:1};
                                curr_plus[2]={x:0,y:1};
                                num_plus = 3;
                }
}
 
function hit_bottom()
{
                rVal = false;
                remove_piece();
                if(curr_x+1==NUMROWS || board[curr_x+1][curr_y]!=0){
                                rVal = true;
                }
                for (i=0;i<num_plus;i++){
                                if((curr_x + curr_plus[i].x + 1)==NUMROWS){
                                                rVal = true;
                                }
                                else if(board[curr_x + curr_plus[i].x+1][curr_y+curr_plus[i].y]!=0){
                                                rVal = true;
                                }
                }
                if(rVal){
                                insert_piece();
                                return true;
                }
                else{
                                return false;
                }
}
 
function move_left()
{
                remove_piece();
                if(curr_y-1<0 || board[curr_x][curr_y-1]!=0){
                                insert_piece();
                                return;
                }
                for(i = 0; i<num_plus;i++){
                                if((curr_y+curr_plus[i].y -1)<0){
                                                insert_piece();
                                                return;
                                }
                                if(board[curr_x+curr_plus[i].x][curr_y+curr_plus[i].y-1]!=0){
                                                insert_piece();
                                                return;
                                }
                }
                remove_piece();
                curr_y--;
                insert_piece();
                print_board();
}
 
function move_right()
{
                remove_piece();
                if(curr_y+1==NUMCOLS || board[curr_x][curr_y+1]!=0){
                                insert_piece();
                                return;
                }
                for(i = 0; i<num_plus;i++){
                                if((curr_y+curr_plus[i].y +1)==NUMCOLS){
                                                insert_piece();
                                                return;
                                }
                                if(board[curr_x+curr_plus[i].x][curr_y+curr_plus[i].y+1]!=0){
                                                insert_piece();
                                                return;
                                }
                }
                remove_piece();
                curr_y++;
                insert_piece();
                print_board();
}
 
function remove_piece()
{
                board[curr_x][curr_y] = 0;
                for(i = 0; i<num_plus;i++){
                                board[curr_x + curr_plus[i].x][curr_y + curr_plus[i].y] = 0;
                }
}
 
function insert_piece()
{
                board[curr_x][curr_y] = curr_piece;
                for(i = 0; i<num_plus;i++){
                                board[curr_x+curr_plus[i].x][curr_y+curr_plus[i].y] = curr_piece;
                }
}
 
function move_down()
{
                curr_x++;
                insert_piece();
}
 
function toggle()
{
                if(curr_piece==7){
                                return;
                }
                allow_move=false;
                remove_piece();
                for(i=0;i<num_plus;i++){
                                helper_x[i]=curr_plus[i].y;
                                helper_y[i]=0-curr_plus[i].x;
                }
                if(toggle_test()){
                                for(i=0;i<num_plus;i++){
                                                curr_plus[i].x=helper_x[i];
                                                curr_plus[i].y=helper_y[i];
                                }
 
                }
                insert_piece();
                print_board();
                allow_move=true;
}
 
function toggle_test()
{
                for(i = 0; i<num_plus;i++){
                                pos_x = curr_x+helper_x[i];
                                pos_y = curr_y+helper_y[i];
                                if(pos_x>=NUMROWS || pos_y<0 || pos_y>=NUMCOLS){
                                                return false;
                                }
                                if(board[pos_x][pos_y]!=0){
                                                return false;
                                }
                }
                return true;
}
 
function check_lines()
{
                var finished;
                for(i = 0;i<NUMROWS;i++){
                                finished = true;
                                for(j=0;j<NUMCOLS;j++){
                                                if(board[i][j]==0){
                                                                finished = false;
                                                }
                                }
                                if (finished){
                                				linecount++;
                                                complete_line(i);
                                }
                }
}
 
function complete_line(line)
{
                for(i=line;i>0;i--){
                                for(j=0;j<NUMCOLS;j++){
                                                board[i][j]=board[i-1][j];
                                }
                }
                for(j=0;j<NUMCOLS;j++){
                                board[0][j]=0;
                }
}
 
function print_board()
{
                for (i = 5; i<NUMROWS; i++) {
                                for(j = 0; j<NUMCOLS; j++) {
                                                map_val(board[i][j]);
                                                ctx.fillRect(j*20,i*20-300,20,20);
                                                if (ctx.fillStyle!="#ffffff") {
                                                                ctx.strokeRect(j*20,i*20-300,20,20);
                                                }
                                }
                }
}

function print_next()
{
	y_val = 140;
	x_val = 463;
	set_plus(next_piece);
	map_val(next_piece);
	if (next_piece == 2){
		y_val = 130;
		x_val = 453;
	}
	else if (next_piece == 7){
		y_val = 130;
	}
	ctx.fillRect(y_val,x_val,20,20);
	ctx.strokeRect(y_val,x_val,20,20);
	for(i=0;i<num_plus;i++){
		ctx.fillRect(y_val+20*curr_plus[i].y,x_val+20*curr_plus[i].x,20,20);
		ctx.strokeRect(y_val+20*curr_plus[i].y,x_val+20*curr_plus[i].x,20,20);
	}
	set_plus(curr_piece);
}

function map_val(val)
{
                if(val==0){
                                ctx.fillStyle="white";
                }
                else val = val%7+1;
                if(val == 0) ctx.fillStyle="white";
                else if (val == 1) ctx.fillStyle="red";
                else if (val == 2) ctx.fillStyle="orange";
                else if (val == 3) ctx.fillStyle="yellow";
                else if (val == 4) ctx.fillStyle="green";
                else if (val == 5) ctx.fillStyle="lightblue";
                else if (val == 6) ctx.fillStyle="blue";
                else if (val == 7) ctx.fillStyle="purple";
}
 
function print_bottom()
{
	ctx.fillStyle = ".5px"
	ctx.clearRect(1,401,198,98);
	ctx.strokeRect(100,400,0,100);
	ctx.fillStyle = "black";
	ctx.font = "20px Verdana";
	ctx.fillText("Lines:",20,425);
	ctx.fillText("Next:",122,425);
	ctx.font = "35px Verdana";
	if (linecount<10)
		ctx.fillText(linecount,38,475);
	else if (linecount<100)
		ctx.fillText(linecount,25,475);
	else
		ctx.fillText(linecount,15,475);
	print_next();
}
 
function game_over()
{
	rVal = false;
	for (i = 0; i<NUMCOLS; i++){
		if (board[14][i] != 0)
			rVal = true;
	}
	return rVal;
}



