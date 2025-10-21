# Lab 24 Solution: AI Model Comparison and Selection Strategy (Bonus)

## Solutions and Reference Implementation

This directory contains solutions for Lab 24 (Bonus) - AI Model Comparison exercises.

> **Note:** This is a bonus lab. The official Module 2 lab sequence focuses on GitHub Copilot CLI (Lab 21), VS Code Extension (Lab 22), and Agent Instruction Files (Lab 23).

---

## Exercise Solutions Overview

### Exercise 1 Solution: Model Capabilities Overview ✅

**Model Comparison Matrix (October 2025):**

| Feature | GPT-5 / GPT-4.5 | Claude 4.x | Gemini 2.5 | DeepSeek Coder V2 |
|---------|-----------------|------------|------------|-------------------|
| **Context Window** | 100K+ tokens (varies by SKU) | Large (varies by SKU) | 100K–1M+ tokens | 64K tokens |
| **Best For** | Complex reasoning, multimodal | Long-form analysis, safety-critical | Large codebase analysis, cloud integration | Specialized coding tasks |
| **Pricing Tier** | Premium | Premium | Mid-range | Open source (self-hosted) |
| **Multimodal** | ✅ Yes | ✅ Yes (Claude 4.x) | ✅ Yes | ❌ No |
| **Tool Use** | Advanced | Robust | Good | Limited |
| **Speed** | Fast | Moderate | Very fast (Flash variants) | Fast |
| **Code Generation Quality** | Excellent | Excellent | Excellent | Very good (code-focused) |
| **Language Support** | Strong across all | Strong across all | Strong (especially with Google Cloud) | Strong |
| **Access** | API, ChatGPT, Copilot | API, Claude.ai | Vertex AI, AI Studio | Self-hosted, API |

---

## Exercise 2 Solution: Coding Task Comparison ✅

### Test Task 1 Solution: Depth-First Search Algorithm

**Prompt Used:**
```
Implement a depth-first search algorithm in Python that:
1. Takes a graph represented as an adjacency list
2. Finds a path from start to target node
3. Returns the path as a list of nodes
4. Includes proper error handling
5. Has clear documentation and examples

Include time and space complexity analysis.
```

**GPT-5 Generated Solution:**
```python
from typing import Dict, List, Optional, Set

def depth_first_search(
    graph: Dict[str, List[str]],
    start: str,
    target: str
) -> Optional[List[str]]:
    """
    Perform depth-first search to find a path from start to target node.
    
    Args:
        graph: Adjacency list representation of the graph
               Example: {'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}
        start: Starting node identifier
        target: Target node identifier
        
    Returns:
        List of nodes representing the path from start to target,
        or None if no path exists
        
    Raises:
        ValueError: If start or target node not in graph
        
    Time Complexity: O(V + E) where V is vertices and E is edges
    Space Complexity: O(V) for the visited set and recursion stack
    
    Examples:
        >>> graph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}
        >>> depth_first_search(graph, 'A', 'D')
        ['A', 'B', 'D']
    """
    # Validate input
    if start not in graph:
        raise ValueError(f"Start node '{start}' not found in graph")
    if target not in graph:
        raise ValueError(f"Target node '{target}' not found in graph")
    
    # Track visited nodes to avoid cycles
    visited: Set[str] = set()
    path: List[str] = []
    
    def dfs_helper(node: str) -> bool:
        """
        Recursive helper function for DFS traversal.
        
        Args:
            node: Current node being visited
            
        Returns:
            True if target is found, False otherwise
        """
        # Add current node to path and mark as visited
        path.append(node)
        visited.add(node)
        
        # Check if we've reached the target
        if node == target:
            return True
        
        # Explore neighbors
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                if dfs_helper(neighbor):
                    return True
        
        # Backtrack: remove node from path if target not found
        path.pop()
        return False
    
    # Start DFS from start node
    if dfs_helper(start):
        return path
    else:
        return None


# Example usage and tests
if __name__ == "__main__":
    # Example 1: Simple path
    graph1 = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }
    
    result1 = depth_first_search(graph1, 'A', 'F')
    print(f"Path from A to F: {result1}")  # Output: ['A', 'B', 'E', 'F'] or ['A', 'C', 'F']
    
    # Example 2: No path exists
    graph2 = {
        'A': ['B'],
        'B': [],
        'C': ['D'],
        'D': []
    }
    
    result2 = depth_first_search(graph2, 'A', 'D')
    print(f"Path from A to D: {result2}")  # Output: None
    
    # Example 3: Cyclic graph
    graph3 = {
        'A': ['B'],
        'B': ['C'],
        'C': ['A', 'D'],
        'D': []
    }
    
    result3 = depth_first_search(graph3, 'A', 'D')
    print(f"Path from A to D: {result3}")  # Output: ['A', 'B', 'C', 'D']
```

**Claude 4.x Generated Solution:**
```python
from typing import Dict, List, Set, Optional

class PathFinder:
    """
    A class to perform depth-first search on a graph to find paths.
    
    Attributes:
        graph: Adjacency list representation of the graph
    """
    
    def __init__(self, graph: Dict[str, List[str]]):
        """
        Initialize the PathFinder with a graph.
        
        Args:
            graph: Dictionary mapping each node to its list of neighbors
        """
        self.graph = graph
        self._validate_graph()
    
    def _validate_graph(self) -> None:
        """Validate that the graph structure is correct."""
        if not isinstance(self.graph, dict):
            raise TypeError("Graph must be a dictionary")
        
        for node, neighbors in self.graph.items():
            if not isinstance(neighbors, list):
                raise TypeError(f"Neighbors of {node} must be a list")
            
            # Check that all neighbors exist in graph
            for neighbor in neighbors:
                if neighbor not in self.graph:
                    raise ValueError(f"Neighbor {neighbor} of {node} not in graph")
    
    def find_path(
        self,
        start: str,
        target: str
    ) -> Optional[List[str]]:
        """
        Find a path from start to target using DFS.
        
        Args:
            start: Starting node
            target: Target node
            
        Returns:
            Path as list of nodes, or None if no path exists
            
        Raises:
            KeyError: If start or target not in graph
            
        Time Complexity: O(V + E)
        Space Complexity: O(V) for visited set and recursion stack
        """
        if start not in self.graph:
            raise KeyError(f"Start node {start} not in graph")
        if target not in self.graph:
            raise KeyError(f"Target node {target} not in graph")
        
        visited: Set[str] = set()
        path: List[str] = []
        
        if self._dfs(start, target, visited, path):
            return path
        return None
    
    def _dfs(
        self,
        current: str,
        target: str,
        visited: Set[str],
        path: List[str]
    ) -> bool:
        """
        Recursive DFS helper.
        
        Args:
            current: Current node
            target: Target node
            visited: Set of visited nodes
            path: Current path being built
            
        Returns:
            True if target found, False otherwise
        """
        visited.add(current)
        path.append(current)
        
        if current == target:
            return True
        
        for neighbor in self.graph[current]:
            if neighbor not in visited:
                if self._dfs(neighbor, target, visited, path):
                    return True
        
        path.pop()
        return False
    
    def find_all_paths(
        self,
        start: str,
        target: str,
        max_paths: Optional[int] = None
    ) -> List[List[str]]:
        """
        Find all paths from start to target.
        
        Args:
            start: Starting node
            target: Target node
            max_paths: Maximum number of paths to find (None for all)
            
        Returns:
            List of all paths found
        """
        if start not in self.graph or target not in self.graph:
            return []
        
        all_paths: List[List[str]] = []
        visited: Set[str] = set()
        current_path: List[str] = []
        
        self._find_all_dfs(start, target, visited, current_path, all_paths, max_paths)
        return all_paths
    
    def _find_all_dfs(
        self,
        current: str,
        target: str,
        visited: Set[str],
        path: List[str],
        all_paths: List[List[str]],
        max_paths: Optional[int]
    ) -> None:
        """Helper for finding all paths."""
        visited.add(current)
        path.append(current)
        
        if current == target:
            all_paths.append(path.copy())
        elif max_paths is None or len(all_paths) < max_paths:
            for neighbor in self.graph[current]:
                if neighbor not in visited:
                    self._find_all_dfs(
                        neighbor, target, visited, path, all_paths, max_paths
                    )
        
        path.pop()
        visited.remove(current)


# Usage examples
if __name__ == "__main__":
    # Example graph
    graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }
    
    finder = PathFinder(graph)
    
    # Find single path
    path = finder.find_path('A', 'F')
    print(f"Path found: {path}")
    
    # Find all paths
    all_paths = finder.find_all_paths('A', 'F')
    print(f"All paths: {all_paths}")
```

**Key Differences:**
- **GPT-5**: More concise, functional approach with inline helper
- **Claude 4.x**: Object-oriented design with comprehensive validation and additional features (find all paths)
- **Both**: Excellent documentation, proper type hints, error handling

---

### Test Task 2 Solution: Code Review and Refactoring

**Original Code:**
```python
def process_data(data):
    result = []
    for i in range(len(data)):
        if data[i] != None and data[i] > 0:
            temp = data[i] * 2
            if temp < 100:
                result.append(temp)
            else:
                result.append(100)
    return result
```

**GPT-5 Refactored Version:**
```python
from typing import List, Optional

def process_data(data: List[Optional[float]]) -> List[float]:
    """
    Process numeric data by doubling positive values, capping at 100.
    
    Filters out None values and non-positive numbers, doubles remaining
    values, and caps the result at 100.
    
    Args:
        data: List of optional numeric values to process
        
    Returns:
        List of processed values (doubled and capped at 100)
        
    Examples:
        >>> process_data([10, 20, None, -5, 60])
        [20, 40, 100]
        
    Time Complexity: O(n) where n is the length of data
    Space Complexity: O(n) for the result list
    """
    result: List[float] = []
    
    for value in data:
        # Skip None and non-positive values
        if value is None or value <= 0:
            continue
        
        # Double the value and cap at 100
        processed_value = min(value * 2, 100)
        result.append(processed_value)
    
    return result


# More concise functional version
def process_data_functional(data: List[Optional[float]]) -> List[float]:
    """Functional version using list comprehension."""
    return [
        min(value * 2, 100)
        for value in data
        if value is not None and value > 0
    ]


# Unit tests
import unittest

class TestProcessData(unittest.TestCase):
    """Test cases for process_data function."""
    
    def test_basic_doubling(self):
        """Test basic doubling of values."""
        self.assertEqual(process_data([10, 20, 30]), [20, 40, 60])
    
    def test_capping_at_100(self):
        """Test that values are capped at 100."""
        self.assertEqual(process_data([60, 70, 80]), [100, 100, 100])
    
    def test_filtering_none(self):
        """Test that None values are filtered out."""
        self.assertEqual(process_data([10, None, 20]), [20, 40])
    
    def test_filtering_negative(self):
        """Test that negative values are filtered."""
        self.assertEqual(process_data([-5, 10, -10]), [20])
    
    def test_filtering_zero(self):
        """Test that zero is filtered."""
        self.assertEqual(process_data([0, 10, 0]), [20])
    
    def test_empty_list(self):
        """Test with empty input."""
        self.assertEqual(process_data([]), [])
    
    def test_all_invalid(self):
        """Test when all values are invalid."""
        self.assertEqual(process_data([None, -5, 0]), [])


if __name__ == '__main__':
    unittest.main()
```

**Claude 4.x Refactored Version:**
```python
from typing import List, Optional, Union
from dataclasses import dataclass

@dataclass
class ProcessingConfig:
    """Configuration for data processing."""
    multiplier: float = 2.0
    max_value: float = 100.0
    min_valid_value: float = 0.0
    include_zero: bool = False

def process_data(
    data: List[Optional[Union[int, float]]],
    config: Optional[ProcessingConfig] = None
) -> List[float]:
    """
    Process numeric data by applying transformation with configurable rules.
    
    Args:
        data: List of optional numeric values
        config: Processing configuration (uses defaults if not provided)
        
    Returns:
        List of processed values
        
    Raises:
        ValueError: If data contains non-numeric values
        
    Examples:
        >>> process_data([10, 20, None, -5, 60])
        [20.0, 40.0, 100.0]
        
        >>> config = ProcessingConfig(multiplier=3.0, max_value=150.0)
        >>> process_data([10, 20, 60], config)
        [30.0, 60.0, 150.0]
    """
    if config is None:
        config = ProcessingConfig()
    
    result: List[float] = []
    
    for index, value in enumerate(data):
        try:
            processed = _process_single_value(value, config)
            if processed is not None:
                result.append(processed)
        except (TypeError, ValueError) as error:
            raise ValueError(
                f"Invalid value at index {index}: {value}"
            ) from error
    
    return result

def _process_single_value(
    value: Optional[Union[int, float]],
    config: ProcessingConfig
) -> Optional[float]:
    """
    Process a single value according to configuration.
    
    Args:
        value: Value to process
        config: Processing configuration
        
    Returns:
        Processed value or None if value should be filtered
    """
    # Filter None values
    if value is None:
        return None
    
    # Validate numeric type
    if not isinstance(value, (int, float)):
        raise TypeError(f"Expected numeric value, got {type(value).__name__}")
    
    # Filter invalid values
    if value < config.min_valid_value or (
        value == 0 and not config.include_zero
    ):
        return None
    
    # Apply transformation
    transformed = value * config.multiplier
    
    # Apply ceiling
    return min(transformed, config.max_value)


# Comprehensive unit tests
import pytest

class TestProcessData:
    """Comprehensive test suite for process_data."""
    
    def test_basic_transformation(self):
        """Test basic multiplication and capping."""
        assert process_data([10, 20, 30]) == [20.0, 40.0, 60.0]
    
    def test_value_capping(self):
        """Test that values are properly capped."""
        assert process_data([60, 70, 80]) == [100.0, 100.0, 100.0]
    
    def test_none_filtering(self):
        """Test None value filtering."""
        assert process_data([10, None, 20, None]) == [20.0, 40.0]
    
    def test_negative_filtering(self):
        """Test negative value filtering."""
        assert process_data([-10, 10, -5]) == [20.0]
    
    def test_zero_filtering(self):
        """Test zero value filtering."""
        assert process_data([0, 10, 0]) == [20.0]
    
    def test_empty_input(self):
        """Test with empty list."""
        assert process_data([]) == []
    
    def test_all_filtered(self):
        """Test when all values are filtered."""
        assert process_data([None, -5, 0, -10]) == []
    
    def test_custom_config(self):
        """Test with custom configuration."""
        config = ProcessingConfig(multiplier=3.0, max_value=150.0)
        assert process_data([10, 20], config) == [30.0, 60.0]
    
    def test_include_zero(self):
        """Test with zero inclusion enabled."""
        config = ProcessingConfig(include_zero=True)
        assert process_data([0, 10]) == [0.0, 20.0]
    
    def test_invalid_type(self):
        """Test error handling for invalid types."""
        with pytest.raises(ValueError):
            process_data([10, "invalid", 20])
    
    def test_float_values(self):
        """Test with float values."""
        assert process_data([10.5, 20.7, 60.8]) == [21.0, 41.4, 100.0]


if __name__ == "__main__":
    pytest.main([__file__])
```

**Key Improvements:**
1. **Type Hints**: Added proper type annotations
2. **Documentation**: Comprehensive docstrings with examples
3. **Naming**: Descriptive variable names (not `i`, `temp`)
4. **Logic**: Used `min()` instead of if/else for capping
5. **Iteration**: Direct iteration instead of `range(len())`
6. **Comparison**: Used `is None` instead of `!= None`
7. **Testing**: Comprehensive unit tests
8. **Configuration**: Claude added configurable behavior (bonus)

---

## Exercise 3 Solution: Model Selection Recommendations ✅

### Scenario-Based Model Selection

#### Scenario 1: Complex Algorithm Design
**Task:** Implement a distributed consensus algorithm (Raft/Paxos)

**Recommendation:** **GPT-5 / GPT-4.5**
- **Reasoning:**
  - Requires deep algorithmic reasoning
  - Complex state management logic
  - Multiple edge cases to handle
  - Need for clear explanations alongside code
- **Strengths:** State-of-the-art reasoning capabilities
- **Alternative:** Claude 4.x for safety-critical implementations

#### Scenario 2: Large Codebase Refactoring
**Task:** Refactor a 50K+ line monolithic application to microservices

**Recommendation:** **Claude 4.x**
- **Reasoning:**
  - Large context window to understand entire codebase
  - Strong at analyzing relationships between components
  - Excellent for long-form analysis and planning
  - Robust safety features prevent accidental breaking changes
- **Strengths:** Long-context understanding, careful analysis
- **Alternative:** Gemini 2.5 Pro for even larger context windows

#### Scenario 3: Quick Prototyping with APIs
**Task:** Build a REST API with real-time data streaming

**Recommendation:** **Gemini 2.5 Flash**
- **Reasoning:**
  - Fast inference speed for rapid iteration
  - Strong multimodal capabilities for API documentation
  - Good integration with Google Cloud services
  - Competitive quality at lower latency
- **Strengths:** Speed, multimodal input, cloud integration
- **Alternative:** GPT-4o mini for balance of speed and capability

#### Scenario 4: Code-Specific Optimization
**Task:** Optimize Python data processing pipeline for performance

**Recommendation:** **DeepSeek Coder V2**
- **Reasoning:**
  - Specialized for coding tasks
  - Strong at code optimization
  - Open source (can self-host)
  - Good understanding of performance patterns
- **Strengths:** Code-focused, cost-effective (self-hosted)
- **Alternative:** GPT-5 for more complex optimization strategies

#### Scenario 5: Multimodal Development
**Task:** Build a web app that processes images and generates reports

**Recommendation:** **GPT-5** or **Gemini 2.5 Pro**
- **Reasoning:**
  - Strong multimodal capabilities (vision + text)
  - Can analyze UI mockups and generate code
  - Can process example images for context
  - Good at integrating different data types
- **Strengths:** Multimodal input processing
- **Alternative:** Claude 4.x if longer context needed for documentation

---

## Best Practices for Model Selection

### Decision Framework

1. **Task Complexity**
   - Simple: Any current model works
   - Complex reasoning: GPT-5, Claude 4.x
   - Code-specific: DeepSeek Coder

2. **Context Requirements**
   - Small (< 10K tokens): Any model
   - Medium (10-50K tokens): GPT-5, Claude 4.x, Gemini 2.5
   - Large (> 50K tokens): Claude 4.x, Gemini 2.5 Pro

3. **Speed vs. Quality**
   - Speed priority: Gemini Flash, GPT-4o mini
   - Quality priority: GPT-5, Claude 4.x
   - Balanced: GPT-4.5, Gemini 2.5

4. **Cost Considerations**
   - Budget-conscious: Open source (DeepSeek, Llama), smaller models
   - Premium: GPT-5, Claude 4.x for critical tasks

5. **Special Requirements**
   - Multimodal: GPT-5, Gemini 2.5, Claude 4.x
   - Cloud integration: Gemini (Google Cloud), appropriate vendor model
   - Self-hosted: DeepSeek, Llama, Mistral

### Hybrid Approach

For complex projects, consider using multiple models:

```
Project Phase → Recommended Model
├── Planning & Architecture → Claude 4.x (long context)
├── Core Implementation → GPT-5 (reasoning)
├── Quick iterations → Gemini Flash (speed)
├── Code optimization → DeepSeek Coder
└── Documentation → GPT-4.5 or Claude 4.x
```

---

## Additional Resources

- [OpenAI Model Documentation](https://platform.openai.com/docs/models)
- [Anthropic Claude Models](https://www.anthropic.com/claude)
- [Google Gemini Documentation](https://ai.google.dev/docs)
- [DeepSeek Coder](https://github.com/deepseek-ai/DeepSeek-Coder)
- Model comparison benchmarks: [Artificial Analysis](https://artificialanalysis.ai/)

---

**Next Steps:**
1. Try the same coding task across different models
2. Compare quality, speed, and cost
3. Develop your own decision framework
4. Document which models work best for your use cases