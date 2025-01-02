# BasicCalculator
A basic calculator
## Backgound:
&emsp;&emsp;&emsp;&emsp;I got an interview of a frontend developer role with TikTok 2 days ago (Dec 30, 2024) which is a System Design round. The interviewer asked me to design "state management" with sudo code. I thought it was something like NgRx of Angular, or Redux of React, but he asked me to do a calculator's state management with some sudo code to handle operators like +, -, *, /, =, and AC/C.
</br>
&emsp;&emsp;&emsp;&emsp;Okay... What states are there of a calculator? Only numbers, operators, AC/C, basically user's input.
</br>
&emsp;&emsp;&emsp;&emsp;The interviewer threw me some images of calculators and user's input vs. expected display, and I started with my thoughts and sudo coding.
</br>
&emsp;&emsp;&emsp;&emsp;If it's a React interview, I would like to use something like "useState" or "useReducer" for state management, but this was a vanilla JS. So I declared variables to handle user's inputs and calculation results. The interviewer asked me if I can see the calculator on my phone or on my laptop to see the expected behavior...
</br>
</br>
&emsp;&emsp;&emsp;&emsp;"Okay, if I type '1 + 2 + ', then it displays '3', because '+' and '-' will calculate the current result, right?" I asked.
</br>
&emsp;&emsp;&emsp;&emsp;"umm.... you are right."
</br>
</br>
&emsp;&emsp;&emsp;&emsp;Oh no! The interviewer is using an iPhone and after the interview I figured out that iPhone does not handle this! (I am an Android and Windows user and I don't know it!)
</br>
&emsp;&emsp;&emsp;&emsp;Then I started to design the "calculator service" just like the JS code in this repo. I need to assume there is a "0 + " from the beginning ('lastValue' and 'operator' in my JS code), and reset the user's input to 0 after each operator ('currentValue = 0' and 'operator = input' in my JS code). (In the interview, my naming convention might be different...)
</br>
&emsp;&emsp;&emsp;&emsp;I guess the interviewer quite does not understand my design, so after I finished my '+' and '-' operator, the interviewer asked me to dry run some cases and edge cases like user hit '+' multiple times and '-' before any other inputs. It turns out my design perfectly handled those situation.
</br>
</br>
&emsp;&emsp;&emsp;&emsp;"Ah... I understand your approach..." said by the interviewer.
</br>
&emsp;&emsp;&emsp;&emsp;No, I'm pretty sure he did not.
</br>
&emsp;&emsp;&emsp;&emsp;"Your approach is over complicated..." said by the interviewer.
</br>
&emsp;&emsp;&emsp;&emsp;See, he didn't understand this approach at all. Okay, please tell me your easier approach?
</br>
</br>
&emsp;&emsp;&emsp;&emsp;Then I failed this interview. I know this is a System Design interview, but any other ways to do a calculator's state management? A pub-sub system? Then changed your question like "please design a state management system of front end with pub-sub".
</br>
&emsp;&emsp;&emsp;&emsp;I felt it would be a nightmare to join he's group and work with him.

## Something about this little repo:
Yes, I will update it to handle more operators like sqrt,  1/x, %, backspace, etc. later on if I have time.
