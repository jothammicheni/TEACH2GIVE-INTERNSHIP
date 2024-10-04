require ('util').inspect.defaultOptions.depth = null;
const {assert, config} = require ('chai');
const {runTest} = require ('./test_runner');
config.truncateThreshold = 0;

describe ('Example Test Cases', () => {
  it ('should work on a simple example', () => {
    const expected = {
      path: 'dummy_dir/a_dir',
      name: 'a_dir',
      type: 'dir',
      size: 4096,
      children: [
        {
          path: 'dummy_dir/a_dir/test_file1.md',
          name: 'test_file1.md',
          type: 'file',
          size: 0,
        },
      ],
    };
    return runTest ('dummy_dir/a_dir', 5, expected);
  });

  it ('should work on a more complex example', () => {
    const expected = {
      path: 'dummy_dir',
      name: 'dummy_dir',
      type: 'dir',
      size: 4096,
      children: [
        {
          path: 'dummy_dir/a_dir',
          name: 'a_dir',
          type: 'dir',
          size: 4096,
          children: [
            {
              path: 'dummy_dir/a_dir/test_file1.md',
              name: 'test_file1.md',
              type: 'file',
              size: 0,
            },
          ],
        },
        {
          path: 'dummy_dir/b_dir',
          name: 'b_dir',
          type: 'dir',
          size: 4096,
          children: [
            {
              path: 'dummy_dir/b_dir/test_file2.md',
              name: 'test_file2.md',
              type: 'file',
              size: 4,
            },
          ],
        },
        {
          path: 'dummy_dir/test_file0.md',
          name: 'test_file0.md',
          type: 'file',
          size: 13,
        },
      ],
    };
    runTest ('dummy_dir', 5, expected);
  });

  it ('should work on a more complex example with depth limiting', () => {
    const expected = {
      path: 'dummy_dir',
      name: 'dummy_dir',
      type: 'dir',
      size: 4096,
      children: [
        {
          path: 'dummy_dir/a_dir',
          name: 'a_dir',
          type: 'dir',
          size: 4096,
          children: [],
        },
        {
          path: 'dummy_dir/b_dir',
          name: 'b_dir',
          type: 'dir',
          size: 4096,
          children: [],
        },
        {
          path: 'dummy_dir/test_file0.md',
          name: 'test_file0.md',
          type: 'file',
          size: 13,
        },
      ],
    };
    return runTest ('dummy_dir', 1, expected);
  });
});
