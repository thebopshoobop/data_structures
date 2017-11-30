import os
from setuptools import setup


def read(file_name):
    return open(os.path.join(os.path.dirname(__file__), file_name)).read()


setup(
    name="data_structures",
    version="0.0.1",
    author="Will Timpson",
    description=("Implementing data structures in Python and JavaScript"),
    license="ISC",
    packages=['structures', 'tests'],
    setup_requires=['pytest-runner'],
    tests_require=['pytest']
)
