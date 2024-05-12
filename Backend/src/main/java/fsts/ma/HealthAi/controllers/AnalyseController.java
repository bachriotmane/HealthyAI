package fsts.ma.HealthAi.controllers;

import fsts.ma.HealthAi.dto.AnalyseDto;
import fsts.ma.HealthAi.entities.Analyse;
import fsts.ma.HealthAi.mappers.AnalyseMapper;
import fsts.ma.HealthAi.repositories.AnalyseRepo;
import fsts.ma.HealthAi.service.AnalyseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/analyse")
@RestController
@AllArgsConstructor
public class AnalyseController {

    private final AnalyseService analyseService;
    private final AnalyseMapper analyseMapper;
    @GetMapping("/{id}")
    public ResponseEntity<?> getAnalyseById(@PathVariable Long id)
    {
        Optional<Analyse> analyse = analyseService.getAnalyse(id);
        if(analyse.isPresent())
        {
            return new ResponseEntity<>(analyseMapper.fromEntity(analyse.get()), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("analyse not found !",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping()
    public ResponseEntity<?> saveAnalyse(@RequestBody Analyse analyse)
    {
        String data = analyseService.addAnalyse(analyse);
        if(data != null)
        {
            return new ResponseEntity<>(data, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("something went wrong !",HttpStatus.NOT_FOUND);
        }
    }
 @GetMapping
    public ResponseEntity<?> getAll()
    {
        List<Analyse> analyses = analyseService.getAllAnalyse();
        if(analyses != null)
        {
            return new ResponseEntity<>(analyses, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("there is no analyses here ",HttpStatus.NOT_FOUND);
        }
    }
}
