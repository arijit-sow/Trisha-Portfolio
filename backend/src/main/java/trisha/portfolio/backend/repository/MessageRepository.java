package trisha.portfolio.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import trisha.portfolio.backend.entity.ContactMessage;

@Repository
public interface MessageRepository extends MongoRepository<ContactMessage, String> {
    // You don't need to write any code here.
    // MongoRepository handles the database inserts automatically.
}