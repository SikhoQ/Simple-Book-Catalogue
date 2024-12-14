# **Simple Book Catalogue**  

## **Overview**  
This project is a simple web application designed to catalogue books, such as those in a personal library. The application allows users to maintain a database of books and organize them into various genres. Additionally, it provides functionality to search and view books based on their categories.  

## **Features**  
- **Book Management:**  
  Add, update, and delete books from the catalogue.  

- **Genre Categorization:**  
  Books are organized into genres for easier navigation and filtering.  

- **Search Functionality:**  
  Search for books based on their title or genre.  

- **Web UI:**  
  A user-friendly interface for managing the book catalogue and viewing entries.  

## **Technologies Used**  
- **Frontend:**  
  - HTML5  
  - CSS3  
  - Vanilla JavaScript  

- **Backend:**  
  - Java with Javalin (web framework)  
  - SQLite (database)  

- **Other Tools:**  
  - Thymeleaf (template engine)  
  - JDBC (for database interaction)  

## **Installation and Setup**  
To run the project locally, follow these steps:  

1. **Clone the Repository:**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```  

2. **Build and Run the Application:**  
   Ensure you have Java (JDK 17 or later) installed, then run:  
   ```bash
   ./mvnw compile exec:java
   ```  

3. **Access the Application:**  
   Open your browser and navigate to `http://localhost:7000`.  

## **Usage**  
- **Add Books:**  
  Use the "Add Book" form to input details such as title, author, and genre.  

- **View Books:**  
  Browse the list of books organized by genre.  

- **Search Books:**  
  Enter a title or select a genre to filter the catalogue.  

- **Edit/Delete Books:**  
  Update or remove existing entries as needed.  

## **Project Structure**  
```
├── grading.rsync-filter.txt
├── Makefile
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── wethinkcode
    │   │       └── spa
    │   │           └── Server.java
    │   └── resources
    │       └── public
    │           ├── index.html
    │           └── js
    │               └── app.js
    └── test
        └── java
            └── wethinkcode
                └── spa
                    ├── AbstractPage.java
                    ├── AntonymTests.java
                    ├── DictionaryTests.java
                    ├── MainPage.java
                    ├── MenuTests.java
                    ├── SynonymTests.java
                    ├── WebSession.java
                    └── WebTestRunner.java
```

## **Learning Outcomes**  
1. **HTTP APIs:**  
   - Designing and handling HTTP requests and responses.  
   - Understanding RESTful principles and how to implement them in a web application.  

2. **Relational Database Design and SQL:**  
   - Creating and optimizing a relational database schema.  
   - Writing SQL queries for CRUD operations and complex data retrieval.  
   - Ensuring data integrity through constraints like `NOT NULL` and foreign keys.  

3. **Object Persistence:**  
   - Mapping objects to relational database tables using JDBC.  
   - Managing database-generated IDs and relationships between entities.  
   - Writing efficient and reusable persistence logic.  

4. **HTML and CSS:**  
   - Building user-friendly and responsive web interfaces.  
   - Structuring content with semantic HTML.  
   - Styling the application with CSS to enhance usability and appearance.  

---

## **Future Improvements**  
- Add user authentication for personalized catalogues.  
- Enhance search functionality with advanced filters (e.g., by author or publication date).  
- Implement pagination for large catalogues.  
- Provide an API for programmatic access to the catalogue.  

## **Contributors**  
This project was completed as part of the WeThinkCode_ program.  

---
