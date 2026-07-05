Semantic Versioning (SemVer)

Version format:  MAJOR.MINOR.PATCH   (2.5.8)

Meaning:
Major (2) → Breaking changes
Minor (5) → New backward-compatible features
Patch (8) → Bug fixes


The Caret (^)
  "express": "^5.1.0"   The major version must remain the same.   Most projects use the caret (^) by default.

    5.1.1 ✅
  
    5.2.0 ✅
  
    5.9.3 ✅
  
    6.0.0 ❌



The Tilde (~)
  "express": "~5.1.0"    Only patch updates are allowed.

    5.1.1 ✅
    
    5.1.5 ✅
    
    5.2.0 ❌

----------------------------------------------------------------------------

Why npm start, but npm run dev?
    Special scripts like npm start, npm test, npm stop can be run directly.

    Custom scripts require: npm run script-name,  i.e npm run dev
