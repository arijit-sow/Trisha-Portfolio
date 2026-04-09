package trisha.portfolio.backend.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trisha.portfolio.backend.entity.ContactMessage;
import trisha.portfolio.backend.repository.MessageRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*") // CRITICAL: This allows your HTML file to communicate with this API
public class ContactController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/send")
    public ResponseEntity<String> receiveMessage(@RequestBody ContactMessage message) {
        // Save the incoming message to MongoDB
        messageRepository.save(message);

        return ResponseEntity.ok("Message securely saved!");
    }
}