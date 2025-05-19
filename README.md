# docker-compose up --build
    # How It Works 
    1.	Admin registers → logs in (gets a secure token)
	2.	Admin types an email → clicks “Send phishing email”
	3.	Backend stores the attempt + tells simulation server to send the email
	4.	Email arrives in inbox with a fake “Click here” link
	5.	If the person clicks → it updates the status in the system to clicked
	6.	Admin sees the result in a table
