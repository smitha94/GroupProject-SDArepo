package se.kth.sda.skeleton.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.PrePersist;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    public CourseController(@Autowired CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("")
    public List<Course> getAll() {
        return courseService.getAll();
    }

    @GetMapping("/{id}")
    public Course getById(@PathVariable Long id) {
        return courseService.getByID(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Course create(@RequestBody Course newCourse){
        return courseService.create(newCourse);
    }

    @PutMapping("")
    public Course update(@RequestBody Course updatedCourse) {
        return courseService.update(updatedCourse);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        courseService.delete(id);
    }


}
