window.DAILY_SOLUTIONS={
    "1846": {
      java: String.raw`import java.util.Arrays;

class Solution {
    public int maximumElementAfterDecrementingAndRearranging(int[] arr) {
        Arrays.sort(arr);
        int cur = 0;
        for (int x : arr) {
            if (x > cur) cur++;
        }
        return cur;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn maximum_element_after_decrementing_and_rearranging(
        mut arr: Vec<i32>
    ) -> i32 {
        arr.sort_unstable();
        let mut cur = 0;
        for x in arr {
            if x > cur {
                cur += 1;
            }
        }
        cur
    }
}`
    },
    "455": {
      java: String.raw`import java.util.Arrays;

class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int child = 0;
        for (int cookie : s) {
            if (child < g.length && cookie >= g[child]) child++;
        }
        return child;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn find_content_children(mut g: Vec<i32>, mut s: Vec<i32>) -> i32 {
        g.sort_unstable();
        s.sort_unstable();
        let mut child = 0usize;
        for cookie in s {
            if child < g.len() && cookie >= g[child] {
                child += 1;
            }
        }
        child as i32
    }
}`
    },
    "27": {
      java: String.raw`class Solution {
    public int removeElement(int[] nums, int val) {
        int slow = 0;
        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != val) nums[slow++] = nums[fast];
        }
        return slow;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut slow = 0usize;
        for fast in 0..nums.len() {
            if nums[fast] != val {
                nums[slow] = nums[fast];
                slow += 1;
            }
        }
        slow as i32
    }
}`
    },
    "26": {
      java: String.raw`class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int slow = 1;
        for (int fast = 1; fast < nums.length; fast++) {
            if (nums[fast] != nums[slow - 1]) nums[slow++] = nums[fast];
        }
        return slow;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.is_empty() { return 0; }
        let mut slow = 1usize;
        for fast in 1..nums.len() {
            if nums[fast] != nums[slow - 1] {
                nums[slow] = nums[fast];
                slow += 1;
            }
        }
        slow as i32
    }
}`
    },
    "80": {
      java: String.raw`class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 2, slow = 0;
        for (int x : nums) {
            if (slow < k || x != nums[slow - k]) nums[slow++] = x;
        }
        return slow;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let k = 2usize;
        let mut slow = 0usize;
        for fast in 0..nums.len() {
            if slow < k || nums[fast] != nums[slow - k] {
                nums[slow] = nums[fast];
                slow += 1;
            }
        }
        slow as i32
    }
}`
    },
    "283": {
      java: String.raw`class Solution {
    public void moveZeroes(int[] nums) {
        int slow = 0;
        for (int x : nums) {
            if (x != 0) nums[slow++] = x;
        }
        while (slow < nums.length) nums[slow++] = 0;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut slow = 0usize;
        for fast in 0..nums.len() {
            if nums[fast] != 0 {
                nums[slow] = nums[fast];
                slow += 1;
            }
        }
        for x in &mut nums[slow..] {
            *x = 0;
        }
    }
}`
    },
    "75": {
      java: String.raw`class Solution {
    public void sortColors(int[] nums) {
        int left = 0, i = 0, right = nums.length - 1;
        while (i <= right) {
            if (nums[i] == 0) swap(nums, i++, left++);
            else if (nums[i] == 2) swap(nums, i, right--);
            else i++;
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn sort_colors(nums: &mut Vec<i32>) {
        let (mut left, mut i) = (0usize, 0usize);
        let mut right = nums.len();
        while i < right {
            match nums[i] {
                0 => {
                    nums.swap(i, left);
                    left += 1;
                    i += 1;
                }
                2 => {
                    right -= 1;
                    nums.swap(i, right);
                }
                _ => i += 1,
            }
        }
    }
}`
    },
    "167": {
      java: String.raw`class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) return new int[]{left + 1, right + 1};
            if (sum < target) left++;
            else right--;
        }
        return new int[0];
    }
}`,
      rust: String.raw`impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let (mut left, mut right) = (0usize, numbers.len() - 1);
        while left < right {
            let sum = numbers[left] + numbers[right];
            if sum == target {
                return vec![left as i32 + 1, right as i32 + 1];
            }
            if sum < target { left += 1; } else { right -= 1; }
        }
        vec![]
    }
}`
    },
    "11": {
      java: String.raw`class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1, ans = 0;
        while (left < right) {
            ans = Math.max(
                ans,
                Math.min(height[left], height[right]) * (right - left)
            );
            if (height[left] <= height[right]) left++;
            else right--;
        }
        return ans;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let (mut left, mut right, mut ans) =
            (0usize, height.len() - 1, 0i32);
        while left < right {
            let area = height[left]
                .min(height[right]) * (right - left) as i32;
            ans = ans.max(area);
            if height[left] <= height[right] {
                left += 1;
            } else {
                right -= 1;
            }
        }
        ans
    }
}`
    },
    "125": {
      java: String.raw`class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right &&
                   !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right &&
                   !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) !=
                Character.toLowerCase(s.charAt(right))) return false;
            left++;
            right--;
        }
        return true;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let chars: Vec<u8> = s.bytes()
            .filter(|c| c.is_ascii_alphanumeric())
            .map(|c| c.to_ascii_lowercase())
            .collect();
        let (mut left, mut right) = (0usize, chars.len());
        while left < right {
            right -= 1;
            if chars[left] != chars[right] {
                return false;
            }
            left += 1;
        }
        true
    }
}`
    },
    "344": {
      java: String.raw`class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left++] = s[right];
            s[right--] = temp;
        }
    }
}`,
      rust: String.raw`impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
        let (mut left, mut right) = (0usize, s.len());
        while left < right {
            right -= 1;
            s.swap(left, right);
            left += 1;
        }
    }
}`
    },
    "15": {
      java: String.raw`import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    ans.add(List.of(nums[i], nums[left], nums[right]));
                    int lv = nums[left], rv = nums[right];
                    while (left < right && nums[left] == lv) left++;
                    while (left < right && nums[right] == rv) right--;
                }
            }
        }
        return ans;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut ans = Vec::new();

        for i in 0..nums.len().saturating_sub(2) {
            if nums[i] > 0 { break; }
            if i > 0 && nums[i] == nums[i - 1] { continue; }

            let (mut left, mut right) = (i + 1, nums.len() - 1);
            while left < right {
                let sum = nums[i] + nums[left] + nums[right];
                if sum < 0 {
                    left += 1;
                } else if sum > 0 {
                    right -= 1;
                } else {
                    ans.push(vec![nums[i], nums[left], nums[right]]);
                    let (lv, rv) = (nums[left], nums[right]);
                    while left < right && nums[left] == lv { left += 1; }
                    while left < right && nums[right] == rv { right -= 1; }
                }
            }
        }
        ans
    }
}`
    },
    "3": {
      java: String.raw`class Solution {
    public int lengthOfLongestSubstring(String s) {
        int[] last = new int[128];
        int left = 0, ans = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            left = Math.max(left, last[c]);
            ans = Math.max(ans, right - left + 1);
            last[c] = right + 1;
        }
        return ans;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let bytes = s.as_bytes();
        let mut last = [0usize; 128];
        let (mut left, mut ans) = (0usize, 0usize);

        for (right, &b) in bytes.iter().enumerate() {
            left = left.max(last[b as usize]);
            ans = ans.max(right - left + 1);
            last[b as usize] = right + 1;
        }
        ans as i32
    }
}`
    },
    "209": {
      java: String.raw`class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0, ans = Integer.MAX_VALUE;
        long sum = 0;

        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                ans = Math.min(ans, right - left + 1);
                sum -= nums[left++];
            }
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        let (mut left, mut sum) = (0usize, 0i64);
        let mut ans = usize::MAX;

        for right in 0..nums.len() {
            sum += nums[right] as i64;
            while sum >= target as i64 {
                ans = ans.min(right - left + 1);
                sum -= nums[left] as i64;
                left += 1;
            }
        }
        if ans == usize::MAX { 0 } else { ans as i32 }
    }
}`
    },
    "567": {
      java: String.raw`import java.util.Arrays;

class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) return false;

        int[] need = new int[26];
        int[] window = new int[26];
        for (char c : s1.toCharArray()) need[c - 'a']++;

        int k = s1.length();
        for (int right = 0; right < s2.length(); right++) {
            window[s2.charAt(right) - 'a']++;
            if (right >= k) window[s2.charAt(right - k) - 'a']--;
            if (right + 1 >= k && Arrays.equals(need, window)) return true;
        }
        return false;
    }
}`,
      rust: String.raw`impl Solution {
    pub fn check_inclusion(s1: String, s2: String) -> bool {
        if s1.len() > s2.len() { return false; }

        let mut need = [0i32; 26];
        let mut window = [0i32; 26];
        for b in s1.bytes() { need[(b - b'a') as usize] += 1; }

        let bytes = s2.as_bytes();
        let k = s1.len();
        for right in 0..bytes.len() {
            window[(bytes[right] - b'a') as usize] += 1;
            if right >= k {
                window[(bytes[right - k] - b'a') as usize] -= 1;
            }
            if right + 1 >= k && window == need { return true; }
        }
        false
    }
}`
    },
    "76": {
      java: String.raw`class Solution {
    public String minWindow(String s, String t) {
        if (t.isEmpty() || s.length() < t.length()) return "";

        int[] need = new int[128];
        int[] window = new int[128];
        int required = 0;
        for (char c : t.toCharArray()) {
            if (need[c]++ == 0) required++;
        }

        int left = 0, valid = 0;
        int start = 0, minLen = Integer.MAX_VALUE;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (need[c] > 0 && ++window[c] == need[c]) valid++;

            while (valid == required) {
                if (right - left + 1 < minLen) {
                    start = left;
                    minLen = right - left + 1;
                }
                char d = s.charAt(left++);
                if (need[d] > 0 && window[d]-- == need[d]) valid--;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }
}`,
      rust: String.raw`impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        if t.is_empty() || s.len() < t.len() { return String::new(); }

        let s_bytes = s.as_bytes();
        let mut need = [0i32; 128];
        let mut window = [0i32; 128];
        let mut required = 0i32;
        for b in t.bytes() {
            if need[b as usize] == 0 { required += 1; }
            need[b as usize] += 1;
        }

        let (mut left, mut valid) = (0usize, 0i32);
        let (mut start, mut min_len) = (0usize, usize::MAX);

        for right in 0..s_bytes.len() {
            let c = s_bytes[right] as usize;
            if need[c] > 0 {
                window[c] += 1;
                if window[c] == need[c] { valid += 1; }
            }

            while valid == required {
                if right - left + 1 < min_len {
                    start = left;
                    min_len = right - left + 1;
                }
                let d = s_bytes[left] as usize;
                left += 1;
                if need[d] > 0 {
                    if window[d] == need[d] { valid -= 1; }
                    window[d] -= 1;
                }
            }
        }

        if min_len == usize::MAX {
            String::new()
        } else {
            String::from_utf8(s_bytes[start..start + min_len].to_vec()).unwrap()
        }
    }
}`
    }
  };
